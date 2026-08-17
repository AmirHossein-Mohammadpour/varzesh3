import { getNewsById } from "@/_lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

const newsPage = async ({ params }: PageProps<"/news/[newsID]">) => {
  const { newsID } = await params;
  const currentNews = getNewsById(newsID);
  if(!currentNews){return notFound()};
  return (
    <div className={`@container/newsPage`}>
      <div className={`p-2 flex flex-col gap-5 bg-black light:bg-white`}>
        <div className={`border-b flex flex-col @3xl/newsPage:flex-row @3xl/newsPage:justify-between gap-3 pb-4`}>
          <div className={`flex flex-col justify-between @3xl/newsPage:self-start @3xl/newsPage:flex-2 gap-2`}>
            <div className={`text-xs`}>{currentNews?.subTitle}</div>
            <h1 className={`text-base font-bold`}>{currentNews?.title}</h1>
            <div className={`text-sm`}>{currentNews?.miniDescription}</div>
          </div>
          <div className={`@3xl/newsPage:flex-1 max-w-150 self-center`}>
            <Image
              src={currentNews?.imageURL}
              alt={currentNews?.title}
              width={800}
              height={571}
              className={`aspect-800/571 rounded-lg`}
            />
          </div>
        </div>
        <div className={`text-sm`}>
          <main className={`flex flex-col gap-5 text-justify`}>
            {currentNews?.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default newsPage;
