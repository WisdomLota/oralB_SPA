import UpgradeToothbrush from "../assets/asset 48.jpeg";

const Upgrade = () => {
    return (
        <div className="flex justify-center my-12 p-12" style={{backgroundImage: `url(${UpgradeToothbrush})`, backgroundSize: "cover", height: '90vh', backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>
            <div className="flex flex-col items-start ml-96 space-y-3">
                <h3 className="text-xl pb-4">ORAL-B WATER FLOSSER ADVANCED</h3>
                <h1 className="text-6xl font-semibold pb-4">Upgrade your <br/>flossing routine</h1>
                <p className="mt-8 space-y-2 text-lg pb-5">Pair with brushing and regular flossing <br/> for an ideal clean</p>
                <button className="bg-blue-900 rounded-full py-3 px-16 mt-6 items-center justify-center text-white font-semibold">Learn More</button>
            </div>
        </div>
    )
}

export default Upgrade;