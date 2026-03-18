import { useState } from "react";
import  { number, z } from "zod";

function PassFail() {
    const [marks, setMarks] = useState("");
    const [result, setResult] = useState("");

    const schema = z.number().min(0).max(100);

function checkResult() {
    const parsedNmber = Number(marks);
 const validation = schema.safeParse(parsedNmber);

 if(!validation.success){
    setResult("Invalid Marks");
    return;
 }

    if (parsedNmber >= 35) {
        setResult("Pass");
    } else {
        setResult("Fail");
    }
}
return (
    <div>
        <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            placeholder="Enter marks"
        />
        <button onClick={checkResult}>Check Result</button>
        <p>Result: {result}</p>
    </div>
);
}
export default PassFail;