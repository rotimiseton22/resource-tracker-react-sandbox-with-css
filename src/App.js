import "./styles.css";
import DeliveryForm from "./components/DeliveryForm";
import DeliveryList from "./components/DeliveryList";

export default function App() {
  return (
    <div className="container">
      <DeliveryForm />
      <h1>Deliveries</h1>
      <DeliveryList />
    </div>
  );
}
