import Image from "next/image";
import logo from "@/_assets/images/varzesh3.svg";
import { Wifi } from "lucide-react";
import * as brands from "@/_ui/brandLogos";
import Link from "next/link";

const Footer2 = () => {
  const theText = "تمام حقوق مادی و معنوی این سایت متعلق به ورزش سه می باشد. شما می توانید از سایت ورزش سه در صورت پذیرش موافقت نامه کاربری استفاده نمایید.";
  const logos = [brands.FaceBook, brands.Youtube, brands.X, brands.Instagram, brands.Telegram, brands.WhatsApp];

  return (
    <div className={`@container/footer2 px-4 pt-6`}>
      <div
        className={`border-t border-white/13 text-[#9e9e9e] p-2 flex flex-col @4xl/footer2:flex-row @4xl/footer2:justify-between items-start @4xl/footer2:items-center gap-5`}
      >
        <Image src={logo} alt="varzesh3" className="w-20 h-auto" />
        <span className="text-xs">{theText}</span>
        <div className="flex items-center gap-6 text-xl font-bold text-[#90a4ae] fill-[#90a4ae]" dir="ltr">
          {logos.map((Logo, index) => {
            return (
              <Link href={`#`} key={index}>
                <Logo className={`w-4.5`}/>
              </Link>
            );
          })}
          <Link href={`#`}>
            <i className={`w-4.5`}>
              <Wifi strokeWidth={2} />
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
