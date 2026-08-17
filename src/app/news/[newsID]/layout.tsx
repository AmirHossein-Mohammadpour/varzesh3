import news from "@/_lib/news";
import NewsBar from "@/_ui/rootPage/newsBar";

const NewsLayout = ({ children }: LayoutProps<"/news/[newsID]">) => {
  return (
    <div className={`@container/newsLayout`}>
      <div
        className={`flex flex-col @3xl/newsLayout:flex-row justify-between gap-5`}
      >
        <div className={`flex-2`}>{children}</div>
        <div className={`flex-1 bg-black light:bg-white text-xs self-center @3xl/newsLayout:self-auto rounded m-2`}>
          <NewsBar news={news} />
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
