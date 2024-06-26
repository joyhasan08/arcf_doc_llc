

const NavbarMain = () => {
    return (
        <div>
            <div className="navbar bg-base-200 font-inter items-center ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="#ct">Contact  Us</a></li>

                            <li><a href="#services">About Us</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl flex flex-col md:flex-row py-8 md:py-0">
                        <img className="w-14 rounded-full  border-2 border-red-600" src='/documents_logo.png' alt='' />

                        <p className="pl-5 text-lg flex   "> ARCF <span className="hidden md:block pl-2">  Documents</span>
                        </p>
                        <p className="text-lg hidden md:block ">
                            Clearing Services Co. L.L.C</p>
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-4 ">
                        <li ><a href="#ct" className="btn border  border-red-500 hover:bg-red-500 hover:text-white">Contact Us</a></li>
                        {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                        <li><a href="#services" className="btn bg-red-500 text-white">About Us</a></li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default NavbarMain;