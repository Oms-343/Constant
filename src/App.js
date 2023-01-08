import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pagess/SignUp";
import Homepage from "./pagess/Homepage";
import SignIn from "./pagess/SignIn";
import Profile from "./pagess/Profile";
import ForgetPassword from "./pagess/ForgetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SignUp />} />
        <Route path="home" element={<Homepage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="forgotpassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
