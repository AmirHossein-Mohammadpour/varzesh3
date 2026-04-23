"use client"
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const {theme, setTheme} = useTheme();
  const [isfirstMount, setIsFirstMount] = useState(true);

  useEffect(()=>{
    setIsFirstMount(false)
  }, []);

  if(isfirstMount){
    return;
  }

  return (
    <div className={`fixed left-10 bottom-10 inline-flex gap-5`}>
      <button onClick={()=>{setTheme("dark")}}>Dark</button>
      <button onClick={()=>{setTheme("system")}}>System</button>
      <button onClick={()=>{setTheme("light")}}>Light</button>
    </div>
  )
}

export default ThemeToggle;