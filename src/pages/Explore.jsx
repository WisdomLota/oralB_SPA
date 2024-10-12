import Interact from "../assets/asset 36.jpeg";
import Modes from "../assets/asset 37.jpeg";
import Magnetic from "../assets/asset 38.jpeg";

const Explore = () => {
    return ( 
        <div>
            <div className="text-center text-3xl mt-4">
                <h2>Explore our most advanced brush yet</h2>
            </div>
            <div className="flex justify-center py-8">
            <div className="flex flex-col items-center mx-4 space-y-4">
                <img className="w-72" src={Interact} alt="ToothPaste" />
                <h2 className="text-center text-3xl">Interactive app & <br/> Guided brushing</h2>
                <p className="text-center text-lg mt-8 leading-none">Cover every tooth surface and <br/>all 16 zones of your mouth with <br/> A.I Recognition and 3D <br/>Tracking.</p><br/>
            </div>
            <div className="flex flex-col items-center mx-4 space-y-4">
            <img className="w-72" src={Modes} alt="Electric Brush" />
                <h2 className="text-center text-3xl ">Different brushing <br/> modes available</h2>
                <p className="text-center text-lg mt-8 leading-none">Set your cleaning mode for a <br/>personalized experience with <br/>up to 7 Smart Modes.</p>
            </div>
            <div className="flex flex-col items-center mx-4 space-y-4">
            <img className="w-72" src={Magnetic} alt="Brush Heads" />
                <h2 className="text-center text-3xl ">Magnetic iO<br/> Drive System</h2>
                <p className="text-center text-lg mt-8 leading-none">Delivers our best-ever <br/>cleaning performance to <br/>remove more plaque than a <br/>regular manual brush.</p>
            </div>
            </div>
            <div className="text-center my-4">
                <button className="bg-blue-900 text-white text-lg py-2 px-16 rounded-full">Learn More</button>
            </div>
        </div>
    )
}

export default Explore;