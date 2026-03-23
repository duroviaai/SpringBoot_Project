function NavBar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-16 py-8">
            <div className="flex items-center gap-3">
                <div className="w-4 h-8 bg-amber-900 rounded-sm transform rotate-12"></div>
                <span className="text-xl font-bold text-gray-800 tracking-wide">RANTY</span>
            </div>
            <div className="flex gap-12 text-gray-800 font-medium">
                <span className="hover:text-gray-600 cursor-pointer transition-colors">Services</span>
                <span className="hover:text-gray-600 cursor-pointer transition-colors">Homes</span>
                <span className="hover:text-gray-600 cursor-pointer transition-colors">About us</span>
                <span className="hover:text-gray-600 cursor-pointer transition-colors">Cases</span>
            </div>
            <div className="flex items-center gap-6">
                <span className="text-gray-800 font-medium">ENG</span>
                <button className="text-gray-800 font-bold underline hover:no-underline transition-all">
                    CONTACT US
                </button>
            </div>
        </nav>
    )
}
export default NavBar;