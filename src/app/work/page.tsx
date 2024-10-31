
import Image from "next/image"



export default function features () {
    return (
        <div className="text-center  mt-14">
           <h1 className="text-blue-950 text-4xl font-bold"> Our Work </h1>
           <section>
          <div className="bg-blue-950 mt-6">
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

        </div>
    )
}