import Image from "next/image";
import qr from "../../../public/qr.svg"
import { ElementType } from "react";


interface FooterContentProps {
    text: string
    Icon: ElementType,
    IconFacebook: ElementType,
    IconTwitter: ElementType,
    IconInstagram: ElementType,
    IconLinkedin: ElementType
}

export default function FooterContent({ text, Icon, IconFacebook, IconTwitter, IconInstagram, IconLinkedin }: FooterContentProps) {
    return (
        <>
            <div className="max-lg:grid 
            max-lg:grid-cols-3
            max-lg:ease-in
            max-lg:gap-5
            max-lg:place-items-center
            max-md:grid-cols-2
            max-md:ease-in
            max-sm:ease-in
            max-sm:grid-cols-1
            text-white 
            w-full flex
            align-center
            gap-5
            justify-around">
                <div className="
                 h-full w-full 
                 gap-2 font-semibold flex flex-col  
                 max-sm:items-center
                 max-sm:ease-in
                 max-sm:justify-center
                 capitalize text-lg">
                    <strong className="font-semibold cursor-pointer">exclusive</strong>
                    <p className="text-base font-normal
                     cursor-pointer text-neutral-300
                     hover:text-amber-600 hover:ease-in">subscribe</p>
                    <p className="text-sm normal-case font-normal">{text}</p>
                    <span className="
                    
                     border
                    border-slate-200  rounded p-2 
                    flex items-center justify-center
                    ">
                        <input type="text" placeholder="enter your email" className="w-full
                        font-normal
                        outline-none placeholder:capitalize
                        placeholder:text-neutral-400 bg-transparent" />
                        <Icon size="20" />
                    </span>
                </div >
                <div className="
                w-full h-full gap-2 flex flex-col
                 capitalize text-lg font-semibold
                 max-sm:items-center
                 max-sm:ease-in
                 max-sm:justify-center
                 max-sm:text-center
                 ">support
                    <p className="normal-case w-full
                     max-w-48 text-base
                     font-normal  text-neutral-300">
                        111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
                    </p>
                    <p className="text-base normal-case font-normal  text-neutral-300">exclusive@gmail.com</p>
                    <p className="text-base normal-case font-normal  text-neutral-300">+88015-88888-9999</p>
                </div >
                <ul className="
                w-full h-full gap-2 flex flex-col
                capitalize text-lg font-semibold
                max-sm:items-center
                max-sm:ease-in
                max-sm:justify-center
                max-sm:text-center
                ">
                    account
                    <li className="w-full w-32 text-base capitalize font-normal cursor-pointer text-neutral-300 hover:text-amber-600 hover:ease-in">my account</li>
                    <li className="w-full w-32  text-base capitalize font-normal cursor-pointer text-neutral-300 hover:text-amber-600 hover:ease-in">login / register</li>
                    <li className="w-full w-32 text-base capitalize font-normal cursor-pointer text-neutral-300 hover:text-amber-600 hover:ease-in" >cart</li>
                    <li className="w-full w-32 text-base capitalize font-normal cursor-pointer text-neutral-300 hover:text-amber-600 hover:ease-in">wishlist</li>
                    <li className="w-full w-32 text-base capitalize font-normal cursor-pointer text-neutral-300 hover:text-amber-600 hover:ease-in">shop</li>
                </ul>
                <ul className="w-full h-full gap-2 flex flex-col 
                 capitalize text-lg font-semibold
                 max-sm:items-center
                 max-sm:ease-in
                 max-sm:justify-center
                 ">
                    quick link
                    <li className=" w-full w-32capitalize text-base font-normal cursor-pointer  text-neutral-300 hover:text-amber-600 hover:ease-in">privacy policy</li>
                    <li className=" w-full w-32text-base capitalize font-normal cursor-pointer  text-neutral-300 hover:text-amber-600 hover:ease-in">terms of use</li>
                    <li className=" w-full w-32text-base capitalize font-normal cursor-pointer  text-neutral-300 hover:text-amber-600 hover:ease-in">faq</li>
                    <li className=" w-full w-32text-base capitalize font-normal cursor-pointer  text-neutral-300 hover:text-amber-600 hover:ease-in">contact</li>
                </ul>

                <div className="w-full h-full gap-2 flex flex-col 
                 capitalize text-lg 
                 max-sm:items-center
                 max-sm:ease-in
                 max-sm:justify-center
                 ">
                    <p className="w-full w-32 text-slate-200 font-semibold cursor-pointer hover:text-amber-600 hover:ease-in">download app</p>
                    <p className="text-base text-neutral-400 font-normal">Save $3 with App New User Only</p>
                    <Image src={qr} alt="qr code" width={200} height={100} />
                    <span className="cursor-pointer font-normal flex w-full items-center justify-start gap-5
                         max-sm:items-center
                         max-sm:ease-in
                         max-sm:justify-center
                    ">
                        <IconFacebook />
                        <IconTwitter />
                        <IconInstagram />
                        <IconLinkedin />

                    </span>
                </div>
            </div>
            <p className="text-base text-neutral-500 w-full text-neutral-100 text-center"> &copy; Copyright Rimel 2022. All right reserved</p>
        </>
    )
}