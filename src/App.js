import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import Users from "./Pages/Dashboard/Users";
import AddDoctors from "./Pages/Dashboard/AddDoctors";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";
import Payment from "./Pages/Dashboard/Payment";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AddReviews from "./Pages/Dashboard/AddReviews";
import Notfound from "./Pages/Shared/Notfound";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="review" element={<AddReviews />} />
        <Route path="appointment" element={<Appointment />} />

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="doctors" element={<AddDoctors />}></Route>
          <Route path="manageDoctors" element={<ManageDoctor />}></Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;