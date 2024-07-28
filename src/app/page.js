import { images } from "@/constants/images";
import FcmTokenComp from "@/hooks/firebaseForeground";
import Image from "next/image";

export default function App() {
  return (
    <div className="flex bg-gradient-to-b from-violet-500 to-fuchsia-500 flex-col items-center">
      <div className="">Hola!</div>
      <div>
        <Image
          src={require("../../assets/bell.png")}
          alt="bellImg"
          className="bg-purple100"
        />
      </div>
      <h1>Lorem Ipsum...</h1>
      <span>Lorem ipsum dolor sit amet.</span>

      <button>send notifications</button>
      <FcmTokenComp />
    </div>
  );
}
