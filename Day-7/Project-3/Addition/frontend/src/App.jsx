import { useState } from "react";
import axios from "axios";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddition = async () => {
    if (!num1 || !num2) {
      setError("Please enter both numbers");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.get(`http://localhost:8080/add?a=${num1}&b=${num2}`);
      setResult(response.data);
    } catch (err) {
      setError("Failed to connect to backend. Make sure the backend is running on port 8080.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Addition Calculator</h1>
      
      <div>
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <span> + </span>
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button 
          onClick={handleAddition}
          disabled={loading}
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>

      {error && (
        <div>
          {error}
        </div>
      )}

      {result && (
        <div>
          <h2>
            Result: {result.num1} + {result.num2} = {result.result}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;