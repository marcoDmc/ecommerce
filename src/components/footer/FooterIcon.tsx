
import { ElementType } from "react"


interface FooterIconProps {
    Icon: ElementType
}

export default function FooterIcon({ Icon }: FooterIconProps) {
    return (
        <>
            <Icon/>
        </>
    )
}