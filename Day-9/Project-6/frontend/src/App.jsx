import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
    return(
        <div className="min-h-screen">
            <NavBar/>
            <Hero/>
            <About/>
        </div>  
    );
}

export default App;