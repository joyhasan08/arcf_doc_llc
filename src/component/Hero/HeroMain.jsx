

const HeroMain = () => {
    return (
        <div>
            <section className=" text-white font-inter">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center md:p-6 text-center rounded-sm lg:max-w-2xl xl:max-w-4xl lg:text-left">
                        <h1 className="md:text-4xl tracking-wider font-bold leading-none text-4xl">Welcome To
                            <span className="text-red-600"> ARCF</span> Documents
                        </h1>
                        <h1 className="md:text-4xl tracking-wider font-bold leading-none text-4xl ">
                            Clearing Services Co. L.L.C
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">The company is committed to providing affordable services and maintaining international quality.
                            𝗕𝐚𝐬𝐢𝐜 𝑺𝐞𝐫𝐯𝐢𝐜𝐞𝐬: All Visa procedure, Tickets, Tour and Hotel Packages and as per client demands.
                            Compliance and service charges are very flexible.

                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="ct" className="px-8 py-3 text-lg font-semibold rounded bg-red-600 text-gray-50">Explore</a>
                            <a rel="noopener noreferrer" href="ct" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 bg-slate-400">Contact</a>
                        </div>
                    </div>
                    {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="/side.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default HeroMain;