import Image from "next/image";
import logo from "@/public/logo.svg"

const Logo = () => {
  return ( 
    <Image 
      height={130}
      width={130}
      alt="로고"
      src={logo}
    />
   );
}
 
export default Logo;