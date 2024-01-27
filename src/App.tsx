import Grocery from "./components/Grocery";
import { useState } from "react";
const initialFormData = {
  description: "",
  amount: 0,
  category: "",
};
function App() {
  const [allData, setAllData] = useState([initialFormData]);
  const handleData = (data: {
    description: string;
    amount: number;
    category: string;
  }) => {
    setAllData([...allData, data]);
  };
  return (
    <>
      <Grocery onData={(data) => handleData(data)} />
      <table>
        {allData.map((data) => (
          <tr key={data.description}>
            <td>{data.description}</td>
            <td>{data.amount}</td>
            <td>{data.category}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
