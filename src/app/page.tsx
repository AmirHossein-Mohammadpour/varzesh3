import Box from "@/_ui/rootPage/box";
import Slider from "@/_ui/rootPage/slider";
import news from "@/_lib/news";
import { Suspense } from "react";
import NewsBar from "@/_ui/rootPage/newsBar";
import { Advert1, Advert2, Advert3, Advert4, Advert5, Advert6, Advert7, Advert8, Advert9,} from "@/_ui/advertises";
import NewsPaper from "@/_ui/rootPage/newsPaper";
import LeagueTables from "@/_ui/leagueTables";
import top5Leagues from "@/_lib/top5Leauges";
import iranLeagues from "@/_lib/iranLeagues";

const RootPage = () => {
  return (
    <main className={`@container/rootPage`}>
      <div className={`p-2 flex flex-col @lg/rootPage:grid @lg/rootPage:grid-cols-2 @5xl/rootPage:grid-cols-3 @7xl/rootPage:grid-cols-4 gap-3`}>
        <div className={`col-span-2`}><Suspense><Slider news={news} sliderType={`main`} /></Suspense></div>
        <div className={`col-span-2`}><Suspense><Slider news={news} sliderType={`secondary`} /></Suspense></div>
        <Box className={`row-span-10`} title="آخرین اخبار فوتبال"><NewsBar news={news} /></Box>
        <Box className={``} title={`گیشه روزنامه ورزشی`}><Suspense><NewsPaper/></Suspense></Box>
        <Box className={`row-span-3`} title={`لیگ های معتبر اروپایی`}><LeagueTables leagues={top5Leagues}/></Box>
        <Box title={`لیگ‌های ایران`}><LeagueTables leagues={iranLeagues}/></Box>
        <Advert1/>
        <Advert2/>
        <Advert3/>
        <Advert4/>
        <Advert5/>
        <Advert6/>
        <Advert7/>
        <Advert8/>
        <Advert9/>
      </div>
    </main>
  );
};

export default RootPage;
