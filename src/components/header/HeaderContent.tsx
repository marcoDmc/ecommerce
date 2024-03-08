import HeaderButtonShop from "./HeaderButtonShop"
import { ReactNode } from "react";


interface HeaderContentProps {
    children: ReactNode
}

export default function HeaderContent({ children }: HeaderContentProps) {
    return (
        <>
            <div className="max-md:place-items-center 
            max-md:p-5
            max-md:grid
            max-md:flex max-md:flex-col-reverse
            p-2 bg-neutral-900 gap-10 w-full 
            flex align-center justify-around">
                <span className="max-md:grid text-neutral-100 flex justify-center w-full text-center gap-2">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <HeaderButtonShop link="#" />
                </span>

                <select name="language" className="w-auto max-md:w-32 bg-neutral-800
                    capitalize text-neutral-100 
                    text-center
                    outline-none
                    " >
                    <option value="english" className="text-neutral-900 bg-neutral-900">english</option>
                    <option value="portuguese" className="text-neutral-900 bg-neutral-900">portuguese</option>
                </select>
            </div>

            {children}
        </>
    )
}