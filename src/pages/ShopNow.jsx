import PasteImg from "../assets/asset 30.jpeg";
import ElectricBrush from "../assets/asset 31.jpeg";
import BrushHead from "../assets/asset 32.jpeg";
const ShopNow = () => {
    return (
        <div className="flex justify-center py-8">
            <div className="flex flex-col items-center mx-4 space-y-2">
                <img className="w-72" src={PasteImg} alt="ToothPaste" />
                <h2 className="text-center text-3xl mt-2">Exclusive <br/> Deals</h2>
                <p className="text-center text-md">Save on top oral care products, <br/>available for a limited time only.</p><br/>
                <button className="bg-blue-900 rounded-full px-24 py-2 text-white text-lg">Shop Now</button>
            </div>
            <div className="flex flex-col items-center mx-4 space-y-2">
            <img className="w-72" src={ElectricBrush} alt="Electric Brush" />
                <h2 className="text-center text-3xl mt-2">Electric <br/> Toothbrushes</h2>
                <p className="text-center text-md">Get a superior clean with more <br/> plaqueremoval than a regular<br/> manual toothbrush.</p>
                <button className="bg-blue-900 rounded-full px-24 py-2 text-white text-lg">Shop Now</button>
            </div>
            <div className="flex flex-col items-center mx-4 space-y-2">
            <img className="w-72" src={BrushHead} alt="Brush Heads" />
                <h2 className="text-center text-3xl mt-2">Replacement <br/> BrushHeads</h2>
                <p className="text-center text-md">Subscribe to the dentist-<br/> inspired brushhead that's <br/>right for you</p>
                <button className="bg-blue-900 rounded-full px-24 py-2 text-white text-lg">Shop Now</button>
            </div>
        </div>
    )
}

export default ShopNow;