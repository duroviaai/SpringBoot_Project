import { useState } from "react"
import Page1 from "./Components/Page1"
import Page2 from "./Components/Page2"


function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return(
    <>
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}

      
      <div style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000}}>
        <select 
          value={currentPage} 
          onChange={(e) => setCurrentPage(Number(e.target.value))}
          style={{padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', cursor: 'pointer'}}
        >
          <option value={1}>Page 1</option>
          <option value={2}>Page 2</option>
          
        </select>
      </div>
    </>
  );
}

export default App;