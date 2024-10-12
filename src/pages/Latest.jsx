import LatestToothBrush from "../assets/asset 33.jpeg";
import StyleOral from "../assets/asset 34.png";
const Latest = () => {
    return (
        <div className="py-32 space-y-3 flex justify-center items-center" style={{backgroundImage: `url(${LatestToothBrush})`, backgroundSize: "cover", backgroundPosition: "center", height: '900px'}}>
            <div className="flex flex-col items-start ml-96 pl-72">
                <img  className="w-28" src={StyleOral} alt="Style OralB" />
                <p className="mt-2 text-white font-semibold text-lg ">EXPERIENCE OUR BEST CLEAN YET</p>
                <h1 className="mt-4 text-white text-6xl font-semibold">THE LATEST <br/>BRUSHING <br/>TECHNOLOGY</h1>
                <p className="mt-8 text-white text-2xl space-y-0">With its Interactive Color Display, Smart<br/> Modes, and Smart Pressure Sensor the iO<br/> Series delivers a professional clean feeling.</p>
                <button className="bg-blue-50 rounded-full py-2 px-16 mt-6 items-center justify-center text-gray-500">Learn More</button>
            </div>
        </div>
    )
}

export default Latest;