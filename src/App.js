import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled.", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled.", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 1500);
  };


  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Switch>
          <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route>
          <Route exact path="/"> */}
            <TextForm
              heading="Enter the text to analyse"
              mode={mode}
              showAlert={showAlert}
            />
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
