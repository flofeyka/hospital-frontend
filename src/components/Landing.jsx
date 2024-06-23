import AboutUs from "./AboutUs";

export default function Landing() {
    return <div>
        <div className='bg-black h-[88vh] -z-10 '>
            <div className='bg-[url("https://sdelanounas.ru/i/d/3/d/f_d3d3LnNkZWxhbm91bmFzLnJ1L3VwbG9hZHMvNC81LzQ1MjE0MDAwODIzMTlfb3JpZy5qcGVnP19faWQ9NDk1NTM=.jpeg")] bg-cover w-full opacity-30 h-full'>
            </div>
            <div className='absolute top-[5vh] mt-[5vh] h-[77vh] flex flex-col items-center w-full justify-center text-white font-bold text-6xl text-center z-1'>
                <div>
                    <img src="https://ssmpbrn.zdravalt.ru/images/logo.png" alt="skoraya" className='h-[150px]' />
                </div>
                <div className='w-[42%] sm:w-[80%] mt-5 '>
                    Скорая помощь г. Барнаул
                </div>
            </div>
            <div className="lg:px-10 sm:items-center  py-10 pb-10 bg-gray-100 flex sm:flex-col">
                <div className="lg:mr-10 h-full sm:mb-10">
                    <div className="text-4xl font-semibold mb-2 sm:text-center">Сайты</div>
                    <div className="rounded-2xl bg-white w-[30vw] sm:w-[90vw] shadow-2xl h-full text-2xl">
                        <div className="border-b-1 border-solid p-5 hover:text-green-500 hover:transition-all">
                            <a href="http://www.kremlin.ru/">Президент Российской Федерации</a>
                        </div>
                        <div className="border-b-1 border-solid p-5 hover:text-green-500 hover:transition-all">
                            <a href="https://altairegion22.ru/">Официальный сайт алтайского края</a>
                        </div>
                        <div className="border-b-1 border-solid p-5 hover:text-green-500 hover:transition-all">
                            <a href="https://tfoms22.ru/">ТФОМС Алтайского Края</a>
                        </div>
                        <div className="border-b-1 border-solid p-5 hover:text-green-500 hover:transition-all">
                            <a href="https://www.zdravalt.ru/">Министерство здравоохранения алтайского края</a>
                        </div>
                        <div className="border-b-1 border-solid p-5 hover:text-green-500 hover:transition-all">
                            <a href="https://altairegion22.ru/gov/federal_auth/fed_healthcare/?ysclid=lxqvfyvaxh869065315">Территориальный орган РосЗдравНадзора по Алтайскому Краю</a>
                        </div>
                        <div className="p-5 hover:text-green-500 hover:transition-all">
                            <a href="https://22reg.roszdravnadzor.gov.ru/">Управление РосЗдравНадзора по Алтайскому краю</a>
                        </div>
                    </div>
                </div>
                <div>
                    <AboutUs/>
                </div>
            </div>
        </div>
    </div>
}