import "./App.css";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import "./Style.css";

function App() {
    return (
        <div className="App">
            <ProfilPhoto />
            <FullName />
            <Address />
        </div>
    );
}

export default App;
