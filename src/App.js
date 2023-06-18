import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Form from "./pages/Form";
import Summary from "./pages/Summary";
import Home from "./pages/Home";
import FormOpen from "./pages/OpenForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/form" Component={Form} />
        <Route path="/summary" Component={Summary} />
        <Route path="/home" Component={Home}/>
        <Route path="/openForm" Component={FormOpen}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
