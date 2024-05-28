import { useTranslations } from "next-intl";

import { ArrowRight, DevstockLogotyp, PrabetonCode } from "@/icon/";
import { Button } from "@/reusecomponents/";

const Home = () => {
  const t = useTranslations("Heroimage");

  return (
    <div className="box-border relative flex flex-col items-center justify-center w-screen h-full bg-[#185b78] ">
      <div
        className="box-border flex items-center justify-center bg-center bg-cover border-4 border-green-700 rounded-3xl w-120 h-120 bg-image-wozniak"
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}></div>
    </div>
  );
};
export default Home;


