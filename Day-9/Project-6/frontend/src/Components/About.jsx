function About() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-light text-gray-800 mb-6">
                            About Our Vision
                        </h2>
                        <p className="text-gray-600 text-lg mb-4">
                            We specialize in creating perfect homes that combine modern design 
                            with natural comfort and ergonomic living spaces.
                        </p>
                        <p className="text-gray-600">
                            Our team works with verified suppliers and uses the best materials 
                            to craft custom homes that exceed expectations.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-medium text-gray-800 mb-4">
                            Why Choose Us?
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
                                Custom home designs
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
                                Premium materials
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
                                12M+ satisfied customers
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
                                Nature-integrated designs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;