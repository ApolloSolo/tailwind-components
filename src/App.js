import HorizontalCard from "./components/Cards/HorizontalCard";
import SimpleCard from "./components/Cards/SimpleCard";
import VerticalCard from "./components/Cards/VerticalCard";
import SimpleNav from "./components/Navbars/Horizontal/SimpleNav";

function App() {
  return (
    <div className="App">
      <div className="my-4">
        <h1 className="text-center text-3xl">Cards</h1>
        <VerticalCard />
        <SimpleCard />
        <HorizontalCard />
      </div>
      <div className="my-4">
      <h1 className="text-center text-3xl">Cards</h1>
        <SimpleNav/>
      </div>
    </div>
  );
}

export default App;
