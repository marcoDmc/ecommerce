import { ElementType } from "react"

interface HeaderIconProps {
    Icon: ElementType
}


export default function HeaderIcon({ Icon }: HeaderIconProps) {
    return (
        <><Icon /></>
    )
}