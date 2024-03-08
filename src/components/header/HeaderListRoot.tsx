import { ReactNode } from "react"

interface HeaderListRootProps {
    children: ReactNode
}



export default function HeaderListRoot({ children }: HeaderListRootProps) {
    return (

        <>
            <ul className="flex w-96 items-center
             justify-between max-md:grid
             max-md:w-auto max-md:p-5
             max-md:text-neutral-300
            ">
                {children}
            </ul>
        </>
    )
}