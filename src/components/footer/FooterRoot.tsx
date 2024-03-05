import { ReactNode } from "react"

interface FooterRootProps {
    children: ReactNode
}


export default function FooterRoot({ children }: FooterRootProps) {
    return (
        <>
            <footer className="p-5 py-10 grid
         bg-neutral-950 w-screen h-auto gap-14">
                {children}
            </footer>
        </>
    )
}