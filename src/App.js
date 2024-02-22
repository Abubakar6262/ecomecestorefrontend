import "./App.scss";

import HandlePath from "./pages/Routes";
import { ToastContainer } from "react-toastify";

//css file of React Tostify
import "react-toastify/dist/ReactToastify.css";

// linking of Bootstrap js file
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AuthContaxtProvider from "./contaxts/AuthContaxt";

function App() {
  return (
    <>
      <AuthContaxtProvider>
        <HandlePath />
      </AuthContaxtProvider>
      <ToastContainer />
    </>
  );
}

export default App;
