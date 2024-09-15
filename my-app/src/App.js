import React, { useEffect, useState } from "react";
import { Data } from "./EmployeData";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Data);
  });

  return (
    <div className="App">
      <table>
        <thead>
          <td>sr.no</td>
          <td>Id</td>
          <td>first name</td>
          <td>last name</td>
          <td>age</td>
        </thead>
        <tbody>
          {data.map((item, index)=>{
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>

              </tr>
            )
          })}
         
        </tbody>
      </table>
    </div>
  );
}

export default App;
