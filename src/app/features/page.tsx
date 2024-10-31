import Image from "next/image"


export default function features () {
    return (
        <div className="text-center text-blue-950 mt-14">
          <h1 className="text-blue-950 text-4xl font-bold">  This is Features Page</h1>

            <section className= "mt-6 bg-blue-950 text-white text-right ">
        <div className="flex text-start py-28 items-center gap-9 ">
          <ul>
        <Image width={900} height={400} src="/pctwo.jpg" alt="Computer"/>
        </ul>
        <ul>
        <h2 className="text-4xl  font-bold ml-9 ">We Create Something New</h2>
        <p className=" text-xl mt-6 font-sans ml-9 mr-32">We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        <li className="grid grid-cols-2 mt-28  text-start">
          <div className="hover:font-semibold">
          <Image className=" invert ml-9" width={40} height={35} src="/copy.png" alt="copy"/>
          <h4 className=" ml-16"> NEW FEATURE PAGES </h4>
          <p className="mt-3 ml-16 mr-24">Startup Framework contains components and complex blocks which can easily.  </p>
          </div>
          <div className=" hover:font-semibold">
          <Image className="invert mr-96" width={40} height={35} src="/daimond3.jpg" alt="daimond"/>
          <h4 className="ml-4">USEFUL SYMBOL COMPONENTS</h4>
          <p className="mt-3 ml-4 mr-36">Samples will show you the feeling on how to play around using the components. </p>
          </div>
        </li>
        </ul>
        </div>
      </section>


        </div>
    )
}