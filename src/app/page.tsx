import Image from "next/image";
export default function Home() {
  return (
    <main>
      {/* landing page section 1*/}
      <section>
      {/* filter brightness-105 hue-rotate-240 */}
      <div className="text-blue-950 mx-60 text-center mt-20">
          <h3 className="text-2xl"> Startup 3 </h3>
          <h1 className="text-4xl mt-4 font-black">Forget About Code</h1>
          <p className="text-2xl mt-3 mx-16 font-sans">Startup Framework gives you complete freedom over your creative process — you don &apos t have to think about any technical aspects. There are no limits and absolutely no coding.</p>
          <button className="bg-blue-900 hover:bg-blue-600 text-white  w-40 rounded-full p-2 text-center mt-16">Create an Account</button>
        </div>
      </section>

      {/* content section 2*/}


      <section className="text-center  bg-blue-950 text-white mt-20 bg-[url('/water.jpg')] bg-cover">
        <br></br>
        <h4 className="text-2xl mt-32">FREE SAMPLE</h4>
        <h2 className="text-4xl font-bold mt-4  ">Powerful Generator and Free Figma Sources </h2>
        <p className="text-lg mt-3 mx-60 font-sans">Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>
    <hr></hr>  

      {/* Features section 3*/}
      <section className="text-white text-right bg-[url('/desert.jpg')] bg-cover filter brightness-100 ">
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


<hr></hr>
      {/* form section 4*/} 
      <section className="bg-blue-700 text-white bg-[url('/water.jpg')] bg-cover ">
        <div className="flex items-center mx-52 gap-52">
          <ul className="mt-20">
            <li><h3 className="text-4xl font-bold">We solve digital problems with an outstanding creative flare</h3></li>
            <li className="mt-5 font-extralight">We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</li>
          </ul>
          <ul><form>
            <div>
            <ul className="w-96 h-20 bg-white rounded-t-xl mt-20 flex justify-between">
            <li><button className=" hover:text-black hover:border-black text-gray-400 mt-4 border-b-2 border-gray-300 w-48">SIGN UP</button></li>
            <li><button className=" hover:text-black hover:border-black text-gray-400 mt-4 border-b-2 border-gray-300 w-48">LOGIN</button></li>
            </ul>
            <ul className="w-96 h-96 bg-white rounded-b-lg text-center">
            <li><input className=" w-72 mt-4 border-2 rounded-full h-11"  type="email" placeholder="    Your email"/></li>
              <li><input className=" w-72 border-2 rounded-full h-11 mt-7" type="password" placeholder="    Your password"/></li>
              <li><button className="bg-teal-500 hover:bg-teal-400 rounded-full w-72 h-11 mt-8">Create an Account</button></li>
              <ul className="text-black flex justify-between mx-16 mt-5">
                <li><button className=" mt-4 border-b-2 w-28"></button></li>
                <li> or </li>
                <li><button className="border-b-2 w-28"></button></li>
              </ul>
              <li><button className="bg-blue-600 hover:bg-blue-500 rounded-full w-72 h-12 mt-6">Login via Twitter</button></li>
              </ul>
              <br>
              </br>
              <br></br>
              <br></br>
            </div>
            </form></ul>
        </div>
      </section>

      {/* testimonial section 5*/}
<hr></hr> 

      
      <section className="text-white bg-blue-950  ">
        <br></br>
      <h2 className="text-2xl text-left ml-48 mt-20 hover:font-semibold">Our Happy Clients</h2>
      <div className="grid grid-cols-2 gap-10 mx-48 mt-8 ">
        <div id="one" className=" border rounded-md w-96 h-52 flex hover:font-semibold"> 
          <ul><Image className="mt-7 ml-3 rounded-md" width={240} height={0} src="/A.jpg" alt="A"/></ul>
          <ul><li><p className="mt-6 mx-7">Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support</p>
          </li>
          <li><h5 className="mt-5 mx-7">Rayhan Curran</h5>
          </li></ul>
        </div>


        <div id="two" className=" border rounded-md w-96 h-52 flex hover:font-semibold">
          <ul> <Image className="mt-7 ml-3 rounded-md" width={240} height={0} src="/one.jpg" alt="B"/></ul>
          <ul><li>
          <p className="mt-6 mx-7">As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website</p></li>
        <li><h5 className="mt-11 mx-7">Kayley Frame</h5>
        </li></ul>
        </div>


        <div id="three" className=" border rounded-md w-96 h-52 flex hover:font-semibold">
          <ul><Image className="mt-7 ml-3 rounded-md" width={140} height={0} src="/C.jpg" alt="C"/></ul>
          <ul>
            <li><p className="mt-6 mx-7 ">The most important part of the Startup Framework is the samples</p></li>
          <li><h5 className="mt-20 mx-7">Gene Whitfield</h5></li>
        </ul>
        </div>

        <div id="four" className=" border rounded-md w-96 h-52 flex hover:font-semibold ">
          <ul><Image className="mt-7 ml-3 rounded-md" width={140} height={0} src="/E.jpg" alt="D"/></ul>
          <ul><li>
          <p className="mt-6 mx-7">I &apos ve built my website with Startup just in one day, and it was ready-to-go. </p></li>
        <li><h5 className="mt-16 mx-7">Allan Kim</h5></li>
        </ul>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </section>

<hr></hr>
        {/* call to action section 6*/}
        <section className=" bg-[url('/mon.jpg')] bg-cover">
          <br></br>
          <br></br>
          <br></br>
          <div className= "text-center text-blue-950 mx-96">
            <h2 className="text-5xl font-extrabold">Easy to setup.</h2>
            <h2 className="text-5xl font-extrabold">Easy to maintain</h2>
            <p className="text-lg mt-9">Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.</p>
            <ul className="flex gap-7 mt-20 mx-44 text-center">
           <li> <button><Image width={46} height={46} className="hover:bg-gray-300 bg-white rounded-full" src="/vid1.png" alt="Youtube icon"/></button></li>
           <li> <button className="bg-blue-950 w-32 rounded-full h-11 text-white hover:bg-blue-800 ">Get Started</button></li>
           </ul>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </section>


        {/* show case section 7 */}
<hr></hr>
        <section>
          <div className="bg-blue-950">
            <br></br>
                <div className="flex justify-around gap-5 mt-10 text-white">   
             <ul>
               <li className="text-2xl hover:font-semibold">Last Works</li>
            <li>
              <div id="1" className="mt-3 text-center hover:font-semibold">
                <Image className="rounded-xl w-80 h-48" width={200} height={200} src="/case1.jpg" alt="showcase1"/>
                <h6 className="text-xs mt-2 ">UI KIT</h6>
                <h4 className="mt-4">Mozart Project</h4>
              </div>
            </li>
            <li>
              <div id="2" className="mt-12 text-center hover:font-semibold">
              <Image className="rounded-xl w-80 h-48" width={200} height={200} src="/case3.png" alt="showcase3"/>
              <h6 className="text-xs mt-2">FRAMEWORK</h6>
              <h4 className="mt-4">Startup Framework 2.0</h4>
              </div>
            </li>
              </ul>

              <ul className="text-right " >
              <button className="text-center border rounded-full w-36 h-9 mr-1 hover:font-semibold hover:bg-blue-100 hover:text-blue-950">
             View all Works
             </button>
                <li>
              <div id="3" className="mt-3 text-center hover:font-semibold">
              <Image className="rounded-xl w-80 h-48" width={200} height={200} src="/case2.png" alt="showcase2"/>
              <h6 className="mt-2 text-xs">PHOTOS</h6>
              <h4 className="mt-4">From the Sky</h4>
              </div>
            </li>
            <li>

              <div id="4" className="mt-12 text-center hover:font-semibold">
              <Image className="rounded-xl w-80 h-48" width={200} height={200} src="/case4.png" alt="showcase4"/>
              <h6 className="text-xs mt-2">PICTURES</h6>
              <h4 className="mt-4">Air Forces</h4>
              
              </div>
            </li>
          </ul>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
</div>
        </section>





        {/*team section 8 */}
        <section className="bg-blue-950  text-white text-left " >
          <hr></hr>
            <div className="mt-20 ml-36 mr-96">
            <h2 className="text-4xl font-semibold">Startup Crew</h2>
            <p className="text-xl mt-4 ">The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.</p>
            
            <div className="grid grid-cols-3">

            <div id="member1" className="mt-20">
              <Image width={120} height={120} className="w-20 h-20 rounded-full" src="/team1.jpg" alt="UL Designer"/>
              <div className="hover:font-semibold">
              <h3 className="text-lg mt-6 ">Leah Salomon</h3>
              <h5 className="text-ms mt-2">UL Designer</h5>
              </div>
              <ul className="flex gap-5 invert mt-7">
                 <li><Image width={26} height={26} className="hover:w-7" src="/twitter.png" alt="twitter"/></li>
                 <li><Image width={26} height={26} className="hover:w-7" src="/facebook.png" alt="facebook"/></li>
                 <li><Image width={26} height={26} className="hover:w-7" src="/football.png" alt="blog"/></li>
                 <li><Image width={26} height={26} className="hover:w-7" src="/instagram.png" alt="instagram"/></li>
              </ul>
            </div>


            <div id="member2" className="mt-20">
              <Image width={120} height={120} className="rounded-full w-20 h-20 " src="/team2.jpg" alt="UX Designer"/>
              <div className="hover:font-semibold">
              <h3 className="text-lg mt-6">Colin Timmons</h3>
              <h5 className="text-ms mt-2">UX Designer</h5>
              </div>
              <ul className="flex invert gap-5 mt-7">
                 <li><Image width={26} height={26} className="hover:w-7"  src="/twitter.png" alt="twitter"/></li>
                 <li><Image width={26} height={26} className="hover:w-7"  src="/football.png" alt="blog"/></li>
              </ul>
            </div>


            <div id="member3" className="mt-20">
              <Image  className="rounded-full w-20 h-20" width={120} height={120} src="/team3.jpg" alt="Front-end Developer"/>
              <div className="hover:font-semibold">
              <h3 className="text-lg mt-6">Miguel Osborne</h3>
              <h5 className="text-ms mt-2">Front-end Developer</h5>
              </div>
              <ul className="flex gap-5 mt-7">
                 <li><Image width={26} height={26} className="hover:w-7 invert" src="/skype.png" alt="skype"/></li>
                 <li><Image width={26} height={26}  className="hover:w-7 invert" src="/gmail.png" alt="gamil"/></li>
                 <li className="w-8 h-8 hover:w-10">git</li>
              </ul>
            </div>


            <div id="member4" className="mt-20">
              <Image className=" rounded-full w-20 h-20" width={120} height={120} src="/team4.jpg" alt="Product Manager"/>
              <div className="hover:font-semibold">
              <h3 className="text-lg mt-6">Taylor Simon</h3>
              <h5 className="text-ms mt-2">Product Manager</h5>
              </div>
              <ul className="mt-7 invert flex gap-5">
                 <li><Image width={26} height={26} className="hover:w-7" src="/twitter.png" alt="twitter"/></li>
                 <li><Image width={26} height={26} className="hover:w-7" src="/instagram.png" alt="instagram"/></li>
              </ul>
            </div>


            <div id="member5" className="mt-20">
              <Image width={120} height={120} className="rounded-full h-20 w-20" src="/team5.jpeg" alt="Copyrighter"/>
              <div className="hover:font-semibold">
              <h3 className="text-lg mt-6">Steven MacAlister</h3>
              <h5 className="text-ms mt-2">Copyrighter</h5>
              </div>
              <Image width={26} height={26} className="hover:w-7 invert mt-7" src="/twitter.png" alt="twitter"/>
              </div>


          </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </section>
<hr></hr>


        {/* contact section 9*/}

        <section className="bg-blue-950 bg-[url('/contact.PNG')] bg-cover">
          <br></br>
          <div className="mt-20 text-white">
          <div className="flex justify-around mx-64 gap-28 items-center">
            <ul>
              <li><h3 className="text-3xl font-semibold">Let &apos s Keep in Toucg</h3></li>
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





        {/* pricing table section 10*/}
  <hr></hr>
<section className="bg-blue-950 text-center text-white bg-[url('/price.PNG')] bg-cover">
  <br></br>
  <div className="mt-20 mx-96">
    <h2 className="text-3xl font-bold">Plans & Pricing</h2>
    <p className="text-xl mt-7 ">Startup Framework is free forever - you only pay for custom domain hossting or to export your site.</p>
  </div>


  <div className="flex justify-center gap-9 mt-16 text-left mx-24 ">
    {/* starter */}


    <ul className="border-2 rounded-lg h-[33rem] w-72 hover:font-semibold">
      <li className=" mt-10 text-xl ml-12">Starter</li>
      <li className=" mt-3 text-4xl font-semibold ml-12">9.99<sup className="text-xl">$</sup></li>
      
      <li id="1" className="mt-8 flex items-center gap-2 text-sm ml-5">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>2 GB of space</h6>
      </li>

      <li id="2" className=" ml-5 mt-2 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>14 days of backups</h6>
      </li>

      <li id="3" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Social integrations</h6>
      </li>

      <li id="4" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Client biling</h6>
      </li>

      <li id="5" className="mt-2 flex items-center gap-2 text-sm ml-11">
        Remote access
      </li>

      <li id="6" className="mt-2 flex items-center gap-2 text-sm ml-11">
        Custom domain
      </li>

      <li id="7" className="mt-2 flex items-center gap-2 text-sm ml-11">
        24 hours support
      </li>

      <li id="8" className="mt-2 flex items-center gap-2 text-sm ml-11">
        Admin tools
      </li>

      <li id="9" className="mt-2 flex items-center gap-2 text-sm ml-11">
        Collaboration tools
      </li>

      <li id="10" className="mt-2 flex items-center gap-2 text-sm ml-11">
        User management
      </li>
      <li id="button" className="text-center mt-8">
        <button className="border rounded-full w-40 h-10 hover:bg-pink-600 hover:border-none">Get Started</button>
      </li>
    </ul>




    {/* Professional */}

    <ul className="border-2 rounded-lg h-[33rem] w-72 hover:font-semibold">
      <li className=" mt-10 text-xl ml-12">Professional</li>
      <li className=" mt-3 text-4xl font-semibold ml-12">19.99<sup className="text-xl">$</sup></li>
      
      <li id="1" className="mt-8 flex items-center gap-2 text-sm ml-5">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>2 GB of space</h6>
      </li>

      <li id="2" className=" ml-5 mt-2 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>14 days of backups</h6>
      </li>

      <li id="3" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Social integrations</h6>
      </li>

      <li id="4" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Client biling</h6>
      </li>

      <li id="5" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Remote access</h6>
      </li>

      <li id="6" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Custom domain</h6>
      </li>

      <li id="7" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>24 hours support</h6>
      </li>

      <li id="8" className="mt-2 flex items-center gap-2 text-sm ml-11">
        Admin tools
      </li>

      <li id="9" className="mt-2 flex items-center gap-2 text-sm ml-11">
        Collaboration tools
      </li>

      <li id="10" className="mt-2 flex items-center gap-2 text-sm ml-11">
        User management
      </li>
      <li id="button" className="text-center mt-8">
        <button className="border rounded-full w-40 h-10 hover:bg-pink-600 hover:border-none">Get Started</button>
      </li>
      </ul>




{/* Team */}

<ul className="border-2 rounded-lg h-[33rem] w-72 hover:font-semibold">
      <li className=" mt-10 text-xl ml-12">Team</li>
      <li className=" mt-3 text-4xl font-semibold ml-12">49.99<sup className="text-xl">$</sup></li>
      
      <li id="1" className="mt-8 flex items-center gap-2 text-sm ml-5">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>2 GB of space</h6>
      </li>

      <li id="2" className=" ml-5 mt-2 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>14 days of backups</h6>
      </li>

      <li id="3" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Social integrations</h6>
      </li>

      <li id="4" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Client biling</h6>
      </li>

      <li id="5" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Remote access</h6>
      </li>

      <li id="6" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Custom domain</h6>
      </li>

      <li id="7" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>24 hours support</h6>
      </li>

      <li id="8" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Admin tools</h6>
      </li>

      <li id="9" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>Collaboration tools</h6>
      </li>

      <li id="10" className="mt-2 ml-5 flex items-center gap-2 text-sm">
        <Image width={16} height={16} src="/checkmark.png" alt="checkmarker"/>
        <h6>User management</h6>
      </li>


      <li id="button" className="text-center mt-8">
        <button className="border rounded-full w-40 h-10 hover:bg-pink-600 hover:border-none">Get Started</button>
      </li>
      </ul>
      </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
</section>
<hr></hr>
      </main>
  )
}
// 