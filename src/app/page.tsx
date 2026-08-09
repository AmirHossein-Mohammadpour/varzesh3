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
import LeagueFixtures from "@/_ui/rootPage/leagueFixtures";
import top5LeaguesFixtures from '@/_lib/top5leaguesFixtures.json';
import iranLeaguesFixtures from '@/_lib/iranLeaguesFixtures.json';

const RootPage = () => {
  return (
    <main className={`@container/rootPage`}>
      <div className={`p-2 flex flex-col @lg/rootPage:grid @lg/rootPage:grid-cols-2 @5xl/rootPage:grid-cols-3 @7xl/rootPage:grid-cols-4 gap-3`}>
        <div className={`order-0 @lg/rootPage:order-0 @5xl/rootPage:order-0 @7xl/rootPage:order- @lg/rootPage:col-span-2`}><Suspense><Slider news={news} sliderType={`main`} /></Suspense></div>
        <div className={`order-2 @lg/rootPage:order-1 @5xl/rootPage:order-2 @7xl/rootPage:order- @lg/rootPage:col-span-2`}><Suspense><Slider news={news} sliderType={`secondary`} /></Suspense></div>
        <div className={`order-1 @lg/rootPage:order-3 @5xl/rootPage:order-1 @7xl/rootPage:order- @lg/rootPage:row-span-4`}><Box title="آخرین اخبار فوتبال"><NewsBar news={news} /></Box></div>
        <div className={`order-3 @lg/rootPage:order-2 @5xl/rootPage:order-3 @7xl/rootPage:order-`}><Box title={`گیشه روزنامه ورزشی`}><Suspense><NewsPaper/></Suspense></Box></div>
        <div className={`order-4 @lg/rootPage:order-4 @5xl/rootPage:order-4 @7xl/rootPage:order- @lg/rootPage:row-span-2 @5xl/rootPage:row-span-3`}><Box title={`جدول لیگ های معتبر اروپایی`}><LeagueTables leagues={top5Leagues}/></Box></div>
        <div className={`order-5 @lg/rootPage:order-4 @5xl/rootPage:order-5 @7xl/rootPage:order- @5xl/rootPage:row-span-2`}><Box title={`جدول لیگ‌های ایران`}><LeagueTables leagues={iranLeagues}/></Box></div>
        <div className={`order-6 @lg/rootPage:order-6 @5xl/rootPage:order-6 @7xl/rootPage:order-`}><Box title={`بازی‌های لیگ‌های معتبر اروپایی`}><LeagueFixtures leagues={top5LeaguesFixtures}/></Box></div>
        <div className={`order-7 @lg/rootPage:order-7 @5xl/rootPage:order-7 @7xl/rootPage:order-`}><Box title={`بازی‌های لیگ‌های ایران`}><LeagueFixtures leagues={iranLeaguesFixtures}/></Box></div>
        <div className={`order-1 @lg/rootPage:order-3 @5xl/rootPage:order-3 @7xl/rootPage:order- flex justify-center items-center borde`}><Advert1/></div>
        <div className={`order-2 @lg/rootPage:order-3 @5xl/rootPage:order-3 @7xl/rootPage:order- flex justify-center items-center borde`}><Advert2/></div>
        <div className={`order-3 @lg/rootPage:order-3 @5xl/rootPage:order-3 @7xl/rootPage:order- flex justify-center items-center borde`}><Advert3/></div>
        <div className={`order-4 @lg/rootPage:order-4 @5xl/rootPage:order-5 @7xl/rootPage:order- flex justify-center items-center borde`}><Advert4/></div>
        <div className={`order-5 @lg/rootPage:order-5 @5xl/rootPage:order-5 @7xl/rootPage:order- flex justify-center items-center borde`}><Advert5/></div>
        <div className={`order-6 @lg/rootPage:order-5 @5xl/rootPage:order-5 @7xl/rootPage:order- flex justify-center items-center borde`}><Advert6/></div>
        <div className={`order-7 @lg/rootPage:order-7 @5xl/rootPage:order-5 @7xl/rootPage:order- flex justify-center items-center borde`}><Advert7/></div>
        <div className={`order-8 @lg/rootPage:order-8 @5xl/rootPage:order- @7xl/rootPage:order- flex justify-center items-center borde`}><Advert8/></div> 
        <div className={`order-9 @lg/rootPage:order-9 @5xl/rootPage:order- @7xl/rootPage:order- flex justify-center items-center borde`}><Advert9/></div>
        <div className={`order-9 @lg/rootPage:order-9 @5xl/rootPage:order- @7xl/rootPage:order- flex justify-center items-center borde`}><Advert1/></div>
      </div>
    </main>
  );
};

export default RootPage;
