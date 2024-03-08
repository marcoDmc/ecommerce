import { ReactNode } from "react"

interface HeaderWrapperIconsRootProps {
    children: ReactNode
}


export default function HeaderWrapperIconsRoot({ children }: HeaderWrapperIconsRootProps) {
    return (
        <>
            <div className="gap-5 flex items-center
           justify-evenly max-md:grid max-md:p-5
           max-md:text-neutral-300
            ">
                {children}
            </div>
        </>
    )
}