import Image from "next/image"



export default function features () {
    return (
        <div className="text-center  mt-14">
           <h1 className="text-blue-950 text-4xl font-bold"> Contact </h1>
           <section className="mt-6 bg-blue-950 ">
          <br></br>
          <div className="mt-20 text-white">
          <div className="flex justify-around mx-64 gap-28 items-center">
            <ul className="text-left">
              <li><h3 className="text-3xl  font-semibold">Let &apos s Keep in Toucg</h3></li>
              <li><p className="text-xl mt-9">We have created a new product that will help designer, developers and companies create websites for their startups quickly and easily.</p></li>
              <li className="flex gap-5 mt-10 items-center hover:font-semibold">
                <Image width={22} height={22} className="invert " src="/call.png" alt="Contact number"/>
                <h5>+923412057527</h5>
              </li>
              <li className="flex gap-5 mt-10 items-center hover:font-semibold">
                <Image width={22} height={22} className="invert" src="/email.png" alt=" Email"/>
              <h5>abdulqadeerrustam421@gmail.com</h5>
              </li>
              <li className="flex gap-5 mt-10 items-start mr-16 hover:font-semibold">
                <Image width={22} height={22} className="invert" src="/address.png" alt=" Address"/>
              <h5>Rastion shop no#360 near Subhani Masjid Patel Para Garden west Karachi Pakistan 74800</h5>
              </li>
            </ul>
            <ul>
              <form className="w-96 h-[32rem] bg-white rounded-2xl">
                <div className="mx-8 text-black flex justify-between">
                  <ul className="mt-10">
                    <li className="text-sm ml-1 font-semibold">YOUR NAME</li>
                    <li><input className="border-2 rounded-full w-40 h-10 mt-1" type="text" placeholder="   First name"/> </li>
                  </ul>
                  <ul className="mt-10">
                    <li className="text-sm ml-1 font-semibold">BUDGET</li>
                    <li><select className="border-2 rounded-full w-32 h-10 mt-1"> 
                      <option value=" $100"> $100</option>
                      <option value="$200">$200</option>
                      <option value="$300">$300</option>
                      <option value="$400">$400</option>
                      <option value="$500">$500</option>
                      <option value="$600">$600</option>
                      <option value="$700">$700</option>
                      <option value="$800">$800</option>
                      <option value="$900">$900</option>
                      <option value="$1000">$1000</option>
                      </select></li>
                  </ul>
                </div>


                <div className="text-black mt-10 mx-8 ">
                  <h3 className="text-sm font-semibold ml-1">INPUT FIELD</h3>
                  <input className="border-2 rounded-full w-80 h-10 mt-2" type="email" placeholder="  name@mail.com"/>
                  <h3 className="text-sm font-semibold ml-1 mt-6">YOUR MESSAGE</h3>
                  <textarea className="border-2 rounded-lg w-80 h-40 mt-2" placeholder=" Message"/>
                </div>


                <div className=" items-center text-black flex mx-8 mt-6 justify-between">
                  <ul className=" flex gap-2 items-center">
                <li><input  className="w-4 h-4 mt-1" type="checkbox" ></input></li>
                <li className=" text-gray-500">Send me a copy</li>
                </ul>
                  <ul>
                    <button className="rounded-full text-white text-ms font-semibold hover:bg-blue-500 bg-blue-600 w-20 h-9">Send</button></ul>
                </div>
              </form>
            </ul>
          </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </section>

           </div>
    )
}