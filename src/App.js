import SignUp from "./pagess/SignUp";
import Homepage from "./pagess/Homepage";
import SignIn from "./pagess/SignIn";
import Profile from "./pagess/Profile";
import ForgetPassword from "./pagess/ForgetPassword";

import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./componentss/Modal";
import HabitDetails from "./componentss/HabitDetails";
import EditHabit from "./componentss/EditHabit";
import NoteHere from "./componentss/NoteHere";
import Remind from "./componentss/Remind";

import HabitDescribe from "./componentss/HabitDescribe";
import HabitDescribeFinal from "./componentss/HabitDescribeFinal";
// import HabitDescribeMulti from "./componentss/HabitDescribeMulti";
import HabitDescribeMulti from "./componentss/HabitDescribeMulti";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Routes location={background || location}>
        <Route path="/" exact element={<SignUp />} />

        <Route path="/home" element={<Homepage />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/home/edit-habit" element={<EditHabit />} />
        <Route path="/home/note" element={<NoteHere />} />
        <Route path="/home/remind" element={<Remind />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="modal" element={<Modal />}>
            <Route path="habit-details" element={<HabitDetails />} />
            <Route path="habit-describe" element={<HabitDescribe />} />
            <Route
              path="habit-describe-multi"
              element={<HabitDescribeMulti />}
            />
            habit-describe-multi
            <Route
              path="habit-describe-final"
              element={<HabitDescribeFinal />}
            />
          </Route>
        </Routes>
      )}

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
