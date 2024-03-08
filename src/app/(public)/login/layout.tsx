// import type { Metadata } from "next";
// import qr from "../../public/qr.svg"
// import Image from "next/image";

"use client"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
          <header className="flex w-full h-14 border border-red-600">
            <div className="w-full border border-neutral-600 flex align-center justify-around">
              <span className="block w-screen border border-red-600">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
              <a href="#" className="block w-full min-w-24">ShopNow</a>

              <select name="language" className="block w-full border border-red-600" >
                <option value="english">english</option>
                <option value="portuguese">portuguese</option>
              </select>
            </div>
            <nav>header</nav>
          </header>
          <section className="bg-indigo-600 h-screen w-screen">
            {children}
          </section>
          {/* <footer className="gap-2
         grid 
         place-items-center bg-neutral-950 w-screen h-auto">
         <div className=" w-full flex align-center justify-around">
         <div className="flex flex-col">
         <strong>exclusive</strong>
         <p>subscribe</p>
         <p>Get 10% off your first order</p>
         <input type="text" placeholder="enter your email" />
         </div>
         <div>support
         <p>
         111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
         </p>
         <p>exclusive@gmail.com</p>
         <p>+88015-88888-9999</p>
         </div>
         <ul>
         account
         <li>my account</li>
         <li>login / register</li>
         <li>cart</li>
         <li>wishlist</li>
         <li>shop</li>
         </ul>
         <ul>
         quick link
         <li>privacy policy</li>
         <li>terms of use</li>
         <li>faq</li>
         <li>contact</li>
         </ul>
         
         <div>
         <p>download app</p>
         <p>Save $3 with App New User Only</p>
         <Image src={qr} alt="qr code" width={100} height={100} />
         </div>
         </div>
         <p> &copy; Copyright Rimel 2022. All right reserved</p>
        </footer> */}
    </>
  );
}
