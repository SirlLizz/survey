import {BrowserRouter, Route,  Routes} from "react-router-dom";
import InputTesting from "./pages/InputTesting/InputTesting";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/input" element={<InputTesting />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
