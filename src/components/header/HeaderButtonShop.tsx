interface HeaderLinkShop {
    link: string
}


export default function HeaderButtonShop({ link }: HeaderLinkShop) {

    return (
        <>
            <a href={link} rel="rel=noopener noreferre" className="block w-auto min-w-24">ShopNow</a>
        </>
    )
}