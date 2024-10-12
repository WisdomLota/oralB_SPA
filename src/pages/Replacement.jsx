import ReplaceToothBrush from "../assets/asset 39.png";
import StyleOral from "../assets/asset 34.png";

const Replacement = () => {
    return (

            <div className="py-32 space-y-3 flex justify-start items-center" style={{backgroundImage: `url(${ReplaceToothBrush})`, backgroundSize: "cover", backgroundPosition: "center", height: '90vh'}}>
                <div className="flex flex-col items-start ml-64">
                    <p className="mt-2 text-white font-semibold text-lg ">REPLACEMENT BRUSH HEADS</p>
                    <h1 className="mt-4 text-white text-6xl font-semibold">Replace every<br/>3 months for an<br/>Optimal Clean</h1>
                    <p className="mt-8 text-white text-2xl space-y-0">Get the iconic dentist-inspired round <br/> brush head that's right for you.</p>
                    <button className="bg-blue-50 rounded-full py-3 px-12 mt-6 items-center justify-center text-gray-500 font-bold">Subscribe Now</button>
                </div>
            </div>

    )
}

export default Replacement;