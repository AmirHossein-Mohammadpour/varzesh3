import Box from "@/_ui/rootPage/box";
import Slider from "@/_ui/rootPage/slider";
import news from '@/_lib/news';
import { Suspense } from "react";
import NewsBar from "@/_ui/rootPage/newsBar";

const RootPage = () => {
  return (
    <main className={`@container/rootPage`}>
      <div className={`p-2 flex flex-col @lg/rootPage:grid @lg/rootPage:grid-cols-2 @5xl/rootPage:grid-cols-3 @7xl/rootPage:grid-cols-4 gap-3`}>
        <div className={`col-span-2`}><Suspense><Slider news={news} sliderType={`main`}/></Suspense></div>
        <Box title="آخرین اخبار فوتبال" className={``}><NewsBar news={news}/></Box>
        <div className={`col-span-2`}><Suspense><Slider news={news} sliderType={`secondary`}/></Suspense></div>
      </div>
    </main>
  );
};

export default RootPage;