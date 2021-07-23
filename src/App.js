import Vehicles from "./components/Vehicles";
import VehicleTypeList from "./components/VehicleTypeList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <VehicleTypeList />
      <Vehicles />
    </div>
  );
}
