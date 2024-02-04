import './App.css'
// import ""
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Routes>
      {/* <Switch> */}
      <Route path="/login" element={<LoginPage />} />
      {/* Add other routes if needed */}
      {/* </Switch> */}
    </Routes>
  );
};

export default App;
