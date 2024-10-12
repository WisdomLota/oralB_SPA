import SpiritVine from "../assets/asset 40.png";
import MagicBrush from "../assets/asset 41.png";
import Stuff from "../assets/asset 42.png";
import PlainBackground from "../assets/asset 43.jpeg"

const ShopNow2 = () => {
    return (
        <div>
            <div className="text-center text-3xl mt-4">
                <h2>For the best clean, everytime</h2>
            </div>
            <div className="flex justify-center py-8">
            <div className="flex flex-col items-center mx-4 space-y-4">
                <img className="w-72" src={SpiritVine} alt="ToothPaste" />
                <h2 className="text-center text-3xl">Did You know?</h2>
                <p className="text-center text-lg mt-8 leading-none">Dentists recommend<br/>replacing your brush head<br/> every 3 months.</p><br/>
            </div>
            <div className="flex flex-col items-center mx-4 space-y-4">
            <img className="w-72" src={MagicBrush} alt="Electric Brush" />
                <h2 className="text-center text-3xl ">iO series<br/> exclusive</h2>
                <p className="text-center text-lg mt-8 leading-none">Advanced bristle technology<br/>deep cleans in hard-to-reach<br/>for your best clean yet</p>
            </div>
            <div className="flex flex-col items-center mx-4 space-y-4">
            <img className="w-72" src={Stuff} alt="Brush Heads" />
                <h2 className="text-center text-3xl ">All other brush heads</h2>
                <p className="text-center text-lg mt-8 leading-none">Delivers our best-ever <br/>cleaning performance to <br/>remove more plaque than a <br/>regular manual brush.</p>
            </div>
            </div>
            <div className="text-center my-4">
                <button className="bg-blue-900 text-white text-xl py-4 px-16 rounded-full mb-16">Shop Now</button>
            </div>
            <div className="py-8 space-y-8 text-center" style={{backgroundImage: `url(${PlainBackground})`, backgroundSize: "cover", backgroundPosition: "center", height: '48vh'}}>
                <h3 className="text-white text-lg ">Still can't decide?</h3>
                <h1 className="text-white text-5xl mb-10">Find the electric <br/> toothbrush that's <br/> right for you</h1>
                <button className="text-black bg-white rounded-full py-4 px-16 text-xl">Compare</button>
            </div>
        </div>
    )
}

export default ShopNow2;