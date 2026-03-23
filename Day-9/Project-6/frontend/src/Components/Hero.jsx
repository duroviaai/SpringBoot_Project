function Hero() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/background.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Main Content Container */}
      <div className="relative z-10 h-screen flex flex-col">
        
        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-between px-16 pt-20">
          
          {/* Left Side - Main Title */}
          <div className="flex-1 max-w-lg">
            <h1 className="text-8xl font-light text-amber-900 leading-none mb-6">
              THE<br/>
              <span className="font-normal">PERFECT</span><br/>
              HOME<span className="text-2xl align-top font-normal">®</span>
            </h1>
            <p className="text-amber-800 text-xl mb-12 italic font-medium">
              / We craft custom homes /
            </p>
            <button className="bg-amber-900 hover:bg-amber-800 text-white px-12 py-4 rounded-full font-medium text-lg transition-colors">
              START
            </button>
          </div>

          {/* Right Side - Design Card positioned over the house in background */}
          <div className="flex-1 relative flex justify-end items-start pt-8">
            {/* Design Options Card - positioned to overlay the house in the background image */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl w-96 mr-16">
              {/* Tab Buttons */}
              <div className="flex gap-3 mb-6">
                <button className="px-5 py-3 bg-gray-100 rounded-full text-sm font-medium text-gray-600">Interior</button>
                <button className="px-5 py-3 bg-gray-100 rounded-full text-sm font-medium text-gray-600">Design</button>
                <button className="px-5 py-3 bg-black text-white rounded-full text-sm font-medium">3D</button>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 leading-tight">
                Unique design &<br/>ergonomics
              </h3>
              <p className="text-gray-500 text-base mb-8">From blueprints to renders.</p>
              
              {/* Room Tour Section */}
              <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">▶</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-700 tracking-wider">ROOMTOUR</span>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-3 w-20 h-12">
                  <div className="w-full h-full bg-gray-300 rounded flex items-center px-2">
                    <div className="w-3 h-2 bg-gray-400 rounded mr-1"></div>
                    <div className="flex-1 h-0.5 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 px-16 pb-16">
          <div className="flex justify-between items-end">
            
            {/* Materials Card - Bottom Left */}
            <div className="bg-amber-800 bg-opacity-95 text-white rounded-3xl p-8 max-w-sm">
              <h3 className="text-2xl font-light mb-6 leading-tight">We use best<br/>materials!</h3>
              <p className="text-base opacity-90 mb-6 leading-relaxed">Working with verified<br/>suppliers.</p>
              
              {/* 3D Material Block Illustration */}
              <div className="relative w-20 h-16">
                {/* Layered material blocks */}
                <div className="absolute bottom-0 left-0 w-16 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded transform rotate-3 shadow-lg"></div>
                <div className="absolute bottom-1 left-2 w-16 h-12 bg-gradient-to-br from-amber-200 to-amber-300 rounded transform -rotate-2 shadow-lg"></div>
                <div className="absolute bottom-2 left-4 w-16 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded transform rotate-1 shadow-lg"></div>
                {/* Vertical elements */}
                <div className="absolute top-0 left-2 w-2 h-10 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-2 left-6 w-2 h-8 bg-gray-500 rounded-sm"></div>
              </div>
            </div>

            {/* Customer Stats - Bottom Center */}
            <div className="text-center">
              {/* Profile Pictures */}
              <div className="flex -space-x-3 justify-center mb-4">
                <div className="w-16 h-16 bg-gray-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-16 h-16 bg-gray-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              
              {/* Stats */}
              <div className="text-6xl font-light text-white mb-2 italic">12m+</div>
              <div className="text-lg text-white font-medium">Customers</div>
            </div>

            {/* Nature & Home Comfort - Bottom Right */}
            <div className="text-right max-w-md">
              <h3 className="text-3xl font-light text-white mb-6 leading-tight">
                WE CAN COMBINE<br/>
                NATURE & HOME<br/>
                COMFORT
              </h3>
              <button className="text-white font-bold underline hover:no-underline transition-all text-lg">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;