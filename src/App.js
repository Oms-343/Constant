import SignUp from "./pagess/SignUp";
import Homepage from "./pagess/Homepage";
import SignIn from "./pagess/SignIn";
import Profile from "./pagess/Profile";
import ForgetPassword from "./pagess/ForgetPassword";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<SignUp />} />

          <Route path="/home" element={<Homepage />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
        </Routes>
      </Router>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
