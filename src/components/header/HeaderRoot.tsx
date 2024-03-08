import { ReactNode } from "react"

interface HeaderRootProps {
    children: ReactNode
}


export default function HeaderRoot({ children }: HeaderRootProps) {
    return (
        <>
            <header className="flex
            flex-col
            border
            items-center
            justify-center
            py-0
            border-b border-neutral-300
            ">
                {children}
            </header>
        </>
    )
}