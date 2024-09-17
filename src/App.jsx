import "./styles.css";
import housesForSale from "./data/housesForSale";
import HouseCards from "./data/houseCards";
export default function App() {

  return (
    <div className="wrapper">
      <header>
        <img className="logo" src="images/logo.png" />
      </header>
      <div className="house-cards-container">{housesForSale.map((houseData, index, array)=>(
        <HouseCards
        key={houseData.id}
        houseData={houseData}
        index={index}
        array={array}/>
      ))}</div>
    </div>
  );
} 