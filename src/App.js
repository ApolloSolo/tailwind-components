import BorderedBtn from "./components/Buttons/BorderedBtn";
import BorderOnly from "./components/Buttons/BorderOnly";
import DisabledBtn from "./components/Buttons/DisabledBtn";
import DownloadBtn from "./components/Buttons/DownloadBtn";
import PillBtn from "./components/Buttons/PillBtn";
import HorizontalCard from "./components/Cards/HorizontalCard";
import SimpleCard from "./components/Cards/SimpleCard";
import VerticalCard from "./components/Cards/VerticalCard";
import DropdownNav from "./components/Navbars/Horizontal/DropdownNav";
import SimpleNav from "./components/Navbars/Horizontal/SimpleNav";

function App() {
  return (
    <div className="App">
      <div className="">
        <SimpleNav />
        <DropdownNav />
      </div>
      <div className="my-4">
        <h1 className="text-center text-3xl mb-4">Cards</h1>
        <div className="my-2">
          <VerticalCard />
        </div>
        <div className="my-2">
          <SimpleCard />
        </div>

        <div className="my-2">
          <HorizontalCard />
        </div>
      </div>

      <div className="my-4">
        <h1 className="text-center text-3xl mb-4">Buttons</h1>
        <div className="flex justify-evenly">
          <DownloadBtn />
          <BorderedBtn />
          <BorderOnly />
          <DisabledBtn />
          <PillBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
