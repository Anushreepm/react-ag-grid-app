import DataField from "./components/datafield";
import Navbar from "./components/navbar";
import SubmittedData from "./components/submitteddata";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <DataField />
      <SubmittedData />
    </div>
  );
}

export default App;
