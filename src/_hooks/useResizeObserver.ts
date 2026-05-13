// hooks/useResizeObserver.ts
import { useEffect, useRef, RefObject } from 'react';

interface UseResizeObserverOptions {
  onResize: (entry: ResizeObserverEntry) => void;
  box?: 'border-box' | 'content-box' | 'device-pixel-content-box';
}

export function useResizeObserver<T extends HTMLElement>(
  targetRef: RefObject<T>,
  options: UseResizeObserverOptions
) {
  const { onResize, box = 'content-box' } = options;
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    observerRef.current = new ResizeObserver((entries) => {
      // Get the first entry (only one element per observer)
      const entry = entries[0];
      if (entry) {
        onResize(entry);
      }
    });

    observerRef.current.observe(targetRef.current, { box });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [targetRef, onResize, box]);
}


import { useEffect, useRef, useState } from 'react';

function useResizeObserver(targetRef) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const observer = new ResizeObserver(entries => {
      // Get the first observed element (there's only one in this case)
      const entry = entries[0];
      if (entry) {
        // Using borderBoxSize for accurate dimensions (including padding/border)
        const width = entry.borderBoxSize?.[0]?.inlineSize || entry.contentRect.width;
        const height = entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height;
        setDimensions({ width, height });
      }
    });

    observer.observe(element);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [targetRef]); // Re-run if the ref changes

  return dimensions;
}