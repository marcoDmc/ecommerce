
import { Footer } from "../components/footer/Footer";
import { VscSend } from "react-icons/vsc";
import { RiFacebookLine } from "react-icons/ri";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiTwitterLogoThin } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import { Header } from "@/components/header/Header";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";



export default function Home() {
  return (
    <>
      <Header.Root>
        <Header.Content>
          <Header.Nav>
            <Header.List>
              <li className="max-md:h-auto cursor-pointer hover:text-amber-600 hover:transition-transform hover:delay-75 hover:underline">home</li>
              <li className="cursor-pointer hover:text-amber-600 hover:transition-transform hover:delay-75 hover:underline">contact</li>
              <li className="cursor-pointer hover:text-amber-600 hover:transition-transform hover:delay-75 hover:underline">about</li>
              <li className="cursor-pointer hover:text-amber-600 hover:transition-transform hover:delay-75 hover:underline">sign up</li>
            </Header.List>
            <Header.WrapperIcons>
              <span className="flex items-center border-0 text-start bg-neutral-200 max-md:text-neutral-900
                rounded  px-2 p-1" >
                <input placeholder="What are you looking for?" type="text" className="outline-none  text-neutral-800
                placeholder:text-neutral-600
                border-0
                rounded 
                p-1
                w-full max-w-42
                bg-transparent
                placeholder:text-sm
                text-normal
                "/>
                <IoSearchOutline />
              </span>
              <IoMdHeartEmpty />
              <HiOutlineShoppingCart />
            </Header.WrapperIcons>
          </Header.Nav>
        </Header.Content>

      </Header.Root>
      <section className="bg-slate-100 h-screen w-screen 
      grid
      ">
    
      </section>
      <Footer.Root>
        <Footer.Content text="place"
          Icon={VscSend}
          IconFacebook={RiFacebookLine}
          IconTwitter={PiTwitterLogoThin}
          IconInstagram={PiInstagramLogoThin}
          IconLinkedin={RiLinkedinLine}
        ></Footer.Content>
      </Footer.Root>
    </>
  );

}