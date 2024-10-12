import Mobile from "../assets/asset 52.jpeg";
import AppStore from "../assets/asset 53.png";
import PlayStore from "../assets/asset 54.png";
const DownloadApp = () => {
    return (
        <div className="py-32 flex justify-start items-center mt-12" style={{backgroundImage: `url(${Mobile})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'110vh', backgroundRepeat: 'no-repeat'}}>
            <div className="flex flex-col items-start ml-64 space-y-4">
                <p className="text-xl text-gray-500">THE ORAL-B APP</p>
                <h1 className="text-6xl font-bold">Get the most out <br/>of your daily<br/> dental routine</h1>
                <div className="flex space-x-2 pt-6">
                    <img src={AppStore} alt="app-store" />
                    <img src={PlayStore} alt="play-store" />
                </div>
            </div>
        </div>
    )
}
export default DownloadApp;