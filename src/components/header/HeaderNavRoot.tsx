"use client"
import { ReactNode, useState } from "react"

interface HeaderNavRootProps {
    children: ReactNode
}


export default function HeaderNavRoot({ children }: HeaderNavRootProps) {
    const [status, setStatus] = useState(false);

    const handleOpenClosedMenu = () => {
        setTimeout(() => {
            setStatus(prop => !prop)
        }, 500);
    }
    return (
        <>
            <nav className="gap-10 max-md:z-10 
            max-md:justify-between
            flex w-full items-center
            justify-around p-5">
                <h1 className="font-bold capitalize text-2xl">exclusive</h1>
                <span className="rounded 
                relative hidden 
                max-md:grid w-10
                 h-10 place-items-center p-1 py-1
                ">
                    <input type="checkbox" name="hamburguer" className="check hidden
                    absolute w-full
                    h-full
                    max-md:block
                    cursor-pointer
                    opacity-0
                    z-10
                    "
                        onClick={handleOpenClosedMenu}
                    />
                    <span className="top rounded bg-neutral-800"></span>
                    <span className="medium w-full rounded bg-neutral-800"></span>
                    <span className="bottom w-full rounded bg-neutral-800"></span>
                </span>
                {status ? (<div className="
                w-full flex justify-evenly
                gap-10 max-md:grid max-md:transition-all
                max-md:absolute max-md:top-64
                max-md:h-full max-md:min-h-96
                max-md:bg-neutral-600
                max-md:rounded-tl-lg
                max-md:rounded-bl-lg
                max-md:w-full max-md:max-w-56
                max-md:overflow-hidden
                max-md:right-0
                ">

                    {children}
                </div>) : (


                    <div className="
                w-full flex justify-evenly
                gap-10 max-md:grid max-md:transition-all
                max-md:absolute max-md:top-64
                max-md:h-full max-md:min-h-96
                max-md:bg-neutral-600
                max-md:rounded-tl-lg
                max-md:rounded-bl-lg
                max-md:w-full max-md:max-w-56
                max-md:overflow-hidden
                max-md:right-0
                max-md:opacity-0
                ">

                        {children}
                    </div>


                )}
            </nav>
        </>
    )
}