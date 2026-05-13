import Image from "next/image";
import logo from "@/_assets/images/varzesh3.svg";
import { Wifi, Package, Camera, Cross, Tv, SquareFunction, Phone } from "lucide-react";

const Footer2 = () => {
  const theText = "تمام حقوق مادی و معنوی این سایت متعلق به ورزش سه می باشد. شما می توانید از سایت ورزش سه در صورت پذیرش موافقت نامه کاربری استفاده نمایید.";
  return (
    <div className={`@container/footer2`}>
      <div className={`border-t border-white/13 text-[#9e9e9e] p-2 flex flex-col @4xl/footer2:flex-row @4xl/footer2:justify-between items-start gap-5`}>
        <Image src={logo} alt="varzesh3" className="w-20 h-auto"/>
        <span className="text-xs">{theText}</span>
        <div className="flex gap-5 text-xl font-bold text-[#90a4ae]" dir="ltr">
          <i><SquareFunction strokeWidth={2}/></i>
          <i><Tv strokeWidth={2}/></i>
          <i><Cross strokeWidth={2}/></i>
          <i><Camera strokeWidth={2}/></i>
          <i><Package strokeWidth={2}/></i>
          <i><Phone strokeWidth={2}/></i>
          <i><Wifi strokeWidth={2}/></i>
        </div>
      </div>
    </div>
  );
};

export default Footer2;