import Oxyjet from "../assets/asset 49.jpeg";
import Intensity from "../assets/asset 50.jpeg";
import flosses from "../assets/asset 51.jpeg";

const GumCare = () => {
    return ( 
        <div>
            <div className="text-center text-3xl mt-4">
                <h2>Gum care like you've <br/> never seen before</h2>
            </div>
            <div className="flex justify-center py-8">
            <div className="flex flex-col items-center mx-4 space-y-4">
                <img className="w-72" src={Oxyjet} alt="ToothPaste" />
                <h2 className="text-center text-3xl">Oxyjet<br/> Technology</h2>
                <p className="text-center text-lg mt-8 leading-none">Helps eliminate plaque bacteria <br/>for healthier gums with water- <br/> enriched microbubbles of air.</p><br/>
            </div>
            <div className="flex flex-col items-center mx-4 space-y-4">
            <img className="w-72" src={Intensity} alt="Electric Brush" />
                <h2 className="text-center text-3xl ">Mutiple intensity<br/> modes</h2>
                <p className="text-center text-lg mt-8 leading-none">Find the right cleaning pressure <br/>to help remove plaque and <br/>leftover food particles with <br/>customizable intensities.</p>
            </div>
            <div className="flex flex-col items-center mx-4 space-y-4">
            <img className="w-72" src={flosses} alt="Brush Heads" />
                <h2 className="text-center text-3xl ">3 flossing streams</h2> <br/>
                <p className="text-center text-lg mt-8 leading-none">Personalize with Multi-Jet for <br/>an all- around clean, Focused <br/>for targeted cleaning, or <br/>Rotational for gum massage.</p>
            </div>
            </div>
            <div className="text-center my-4">
                <button className="bg-blue-900 text-white text-lg py-2 px-16 rounded-full">Learn More</button>
            </div>
        </div>
    )
}

export default GumCare;