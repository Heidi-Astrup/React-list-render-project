import reactLogo from "./assets/react.svg";
import ListComponent from "./components/ListComponent";

function App() {
    return (
        <>
            <header>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <h1>React List Render Component</h1>
            </header>
            <ListComponent />
        </>
    );
}

export default App;
