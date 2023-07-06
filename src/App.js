import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import SetCoffeeBean from "./components/SetCoffeeBean";
import coffeeBeans from "./mockData/coffeeBeans.json";

function App() {
  return (
    <>
      <h1>Welcome to Coffee App</h1>
      <SelectedCoffeeBean></SelectedCoffeeBean>
      <SetCoffeeBean coffeeBeans={coffeeBeans}></SetCoffeeBean>
    </>
  );
}

export default App;