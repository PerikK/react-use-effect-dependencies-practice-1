import { useState, useEffect } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");
  const [data, setData] = useState(null);
  
  console.log({ data });
  console.log({ dataType });

  // Write code here.
  //

  useEffect(() => {
		if (dataType === "people") {
			fetch("https://swapi.dev/api/people/")
				.then((response) => response.json())
				.then(setData)
			return
		}
		if (dataType === "planets") {
			fetch("https://swapi.dev/api/planets/")
				.then((response) => response.json())
				.then(setData)
			return
		}
		if (dataType === "starships") {
			fetch("https://swapi.dev/api/starships/")
				.then((response) => response.json())
				.then(setData)
			return
		}
	}, [dataType])



  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
