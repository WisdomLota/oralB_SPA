import OralBLogo from "../assets/asset 3.png";
const NavigationBar = () => {
    return (
        <div >

            <div className=" flex bg-blue-900 justify-center items-center p-2">
                <p className="text-white text-center">Up to $40 discount</p>
            </div>

            <div className="flex p-2 space-x-4 bg-gray-200">
                <div className="mx-32 mr-96">
                    United States&nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp;   English ▼
                </div>
                <div className="mx-4">
                    Find your Brush Match&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; Login&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; Register&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; Track Order&nbsp;&nbsp;&nbsp;
                </div>
                <div className="flex ml-8 space-x-3">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
            </div>

            <div className="flex p-3 space-x-12">
                <div className="mt-1 ml-24">
                <img src={OralBLogo} alt="OralB Logo" />
                </div>
                <div className="inline-flex bg-blue-900 text-white rounded-full px-8 py-0.5 justify-center items-center">
                    <p className="text-white font-bold text-lg">Deals</p>
                </div>
                <div className="flex space-x-24 text-center text-blue-900 pl-16  leading-tight justify-center items-center text-lg">
                    <p >Electric <br/>Toothbrushes</p>
                    <p>Replacement <br/> Brushheads</p>
                    <p>More <br/>Products</p>
                    <p>Gift Guide</p>
                    <p>Kids</p>
                    <p>Learn</p>
                </div>
            </div>
            
        </div>
    )
}

export default NavigationBar;