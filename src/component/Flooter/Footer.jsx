

const Footer = () => {
    return (
        <div>
            <footer id="ct" className="py-6 pt-12 bg-slate-800 text-gray-100 ">
                <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                    <div className="flex flex-col justify-between md:flex-row gap-4">
                        <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600">
                                    <img className="w-24 rounded-full" src="/documents_logo.png" alt="" />
                                </div>
                                <span className="self-center md:text-xl font-semibold">ARCF Documents <br />
                                    Clearing Services Co. L.L.C</span>
                            </a>
                        </div>
                        <div className="col-span-6 text-center md:text-left md:col-span-3">
                            <p className="pb-1 text-lg font-medium">Address</p>
                            <ul>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-red-600">Plot No- 235. Flat No- 101. <br /> Al Naif Building, Naif, Deira Dubai, UAE</a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-span-6 text-center md:text-left md:col-span-3">
                            <p className="pb-1 text-lg font-medium">Contact Us</p>
                            <ul>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-red-600">Email: dubaiarcf@gmail.com</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-red-600">PHONE : +971 44518790</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-red-600">MOBILE :+971 585 380 301</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="grid justify-center pt-6 lg:justify-between">
                        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                            <span>© All rights reserved ARCF Documents
                                Clearing Services Co. L.L.C</span>

                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;