import { Link } from "react-router-dom";
import { ENDPOINTS, EndPointType } from "../../constants/mock";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {ENDPOINTS?.map((item: EndPointType, idx: number) => (
        <div>
          <Link to={`/${item.linkTo}`} key={idx} className="link">
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
