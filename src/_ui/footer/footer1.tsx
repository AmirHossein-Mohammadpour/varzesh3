import { cols } from "@/_lib/footer";
import Link from "next/link";

const Footer1 = () => {
  return (
    <div className={`@container/footer1`}>
      <div className={`px-2 grid grid-cols-2 @lg/footer1:grid-cols-3 @4xl/footer1:grid-cols-6 gap-10`}>
        {cols.map((col, index) => {
          return (
            <ul key={index} className={`flex flex-col gap-2`}>
              {col.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${item === col[0] ? "text-md font-medium text-gray-300" : "text-xs text-gray-500"}`}
                  >
                    <Link href={`#`}>{item}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Footer1;
