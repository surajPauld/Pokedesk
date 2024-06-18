import { useEffect, useState } from "react";
import { MainApi } from "../../api/api";
import { Link } from "react-router-dom";
import "./styles.css";

type RegionResponseType = {
  name: string;
  url: string;
};

const Regions = () => {
  const [regions, setRegios] = useState([]);

  useEffect(() => {
    MainApi.get("region").then((res) => setRegios(res.data.results));
  }, []);

  return (
    <div>
      <h1>Regions</h1>
      <ul>
        {regions?.map((item: RegionResponseType, idx: number) => (
          <li key={idx}>
            <Link to={"regions"}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Regions;
