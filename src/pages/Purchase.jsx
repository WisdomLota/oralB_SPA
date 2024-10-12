import HeroImg from "../assets/asset 25.jpeg";
import CartImg from "../assets/asset 27.png";
import Badge1 from "../assets/asset 28.png";
import MoneyBack from "../assets/asset 29.png";
const Purchase = () => {
    return (
        <div>
            <div>
            <img src={HeroImg} alt="Hero-Image" />
            </div>
            <div className="bg-blue-900 justify-center items-center flex space-x-8 py-4">
                <div className="flex space-x-4 space-y-0 justify-center items-center">
                    <img  className="w-12 h-12" src={CartImg} alt="CartImg" />
                    <p className="text-white text-lg">FREE STANDARD <br/>SHIPPING</p>
                </div>
                <div className="flex space-x-4 space-y-0 justify-center items-center">
                    <img className="w-12 h-12" src={Badge1} alt="number1" />
                    <p className="text-white text-lg">#1 TOOTHBRUSH USED BY <br/> DENTISTS WORLDWIDE</p>
                </div>
                <div className="flex space-x-4 space-y-0 justify-center items-center">
                    <img className="w-12 h-12" src={MoneyBack} alt="MoneyBackImg" />
                    <p className="text-white text-lg">60 DAYS MONEY <br/>BACK GUARANTEE</p>
                </div>
            </div>
        </div>
    )
}

export default Purchase;