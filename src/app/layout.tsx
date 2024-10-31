import Link from "next/link"

// import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="max-w-screen-2xl mx-auto" lang="en">
  <body className=" bg-[url('/C.jpg')] bg-cover h-full">
        <div>
          <ul className="flex gap-12 mt-12 text-blue-950 text-center text-lg font-serif border-blue-950 border-4 rounded-xl w-6/12  backdrop-contrast-100 justify-center mx-96 ">
          <li className="w-20 text-center hover:bg-blue-800 hover:text-white hover:rounded-md"><Link href="/">Home</Link></li>
          <li className="w-24 text-center hover:bg-blue-800 hover:text-white hover:rounded-md" ><Link href="/features">Features</Link></li>
          <li className=" w-20  text-center hover:bg-blue-800 hover:text-white hover:rounded-md"><Link href="/pricing">Pricing</Link></li>
          <li className="w-14 text-center hover:bg-blue-800 hover:text-white hover:rounded-md"><Link href="/blog">Blog</Link></li>
          <li className=" w-12 text-center hover:bg-blue-800 hover:text-white hover:rounded-md"><Link href="/be">Be</Link></li>
          </ul>
        </div>
        {children}




        {/* footer */}

        <footer className="text-center text-white bg-blue-800  ">
          <br></br>
          <div className="mx-24 mt-10">
          <nav className="flex justify-between ">
            <ul className="text-xl font-semibold">
              Startup 3
            </ul>
            <ul className="flex gap-8 items-center">
              <li><Link className="text-sm hover:font-semibold" href="/Privacy">Privacy Policy</Link></li>
              <li><Link className="text-sm hover:font-semibold" href="/Privacy">Terms</Link></li>

              <li className="items-center">
                <Link href="https://x.com/?lang=en" target="main">
                <Image width={18} height={18} className="invert hover:w-7" src="/twitter.png" alt="Twitter"/></Link>
              </li>
                <li>
                <Link href="https://www.facebook.com" target="main">
              <Image width={18} height={18} className="invert hover:w-7" src="/facebook.png" alt="Twitter"/></Link>
              </li>
              <li>
                <Link href="https://www.google.co.uk" target="main">
              <Image width={20} height={20} className="invert hover:w-7" src="/google.png" alt="Twitter"/></Link>
              </li>
            </ul>
            </nav>
            <hr className="mt-5"></hr>
            <nav className="flex justify-between mt-5 text-sm">
            <ul className="flex gap-8">
              <li><Link className="hover:font-semibold" href="/tour">Tour</Link></li>
              <li><Link className="hover:font-semibold" href="/features">Features</Link></li>
              <li><Link className="hover:font-semibold" href="/pricing">Pricing Plans</Link></li>
              <li><Link className="hover:font-semibold" href="/work">Our Works</Link></li>
              <li><Link className="hover:font-semibold" href="/brands">Brands</Link></li>
              <li><Link className="hover:font-semibold" href="/contacts">Contacts</Link></li>
            </ul>

            <ul>
            &copy;2017 Designmodo. All rights reserved
            </ul>
        </nav>
        </div>
        </footer>
      </body>
    </html>

  )
}


 

