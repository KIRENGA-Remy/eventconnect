import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import { default as DesktopLanding, default as LandingPage } from "./layout/Landing";

import Sharing from "./components/Sharing";

import About from "./components/About";
import EventCreation from "./components/EventCreation";
import ForgotPassword from "./components/ForgotPassword";
import Location from "./components/Location";
import Login from "./components/Login";
import Missing from "./components/Missing";
import Notification from "./components/Notification";
import ResetPassword from "./components/ResetPassword";
import ServicePlanners from "./components/ServicePlanners";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
import Testing from "./components/SubComponents/BookingSteptest";
import BookEvent from "./components/SubComponents/EventCard";
import AuthenticationService from "./layout/Authenticating";
import SignInOption from "./layout/SignInOption";
import BookPage from "./layout/Venue/Book";
import Home from "./layout/Venue/Home";

import HomeDashboard from "./components/HomeDashboard";
import Invoices from "./scenes/invoices";
import Team from "./scenes/team";
// import Bar from "./scenes/bar";
import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import { Toaster } from "react-hot-toast";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step4 from "./components/Step3";
import Step3 from "./components/Step4";
import Step5 from "./components/Step5";
import ContactUs from "./components/SubComponents/ContactUs";
import Support from "./components/Support";
import TermsAndConditions from "./components/TermsandConditions";
import UserProfile from "./components/UserProfile";
import ThankYou from "./scenes/Thankyou/Thankyou";
import Calendar from "./scenes/calendar/calendar";

import { useDispatch, useSelector } from "react-redux";
import { setDataevent } from "./redux/eventSlide";

import NewDashboard from "./components/NewDashboard";
import AllBookings from "./components/AllBookings";
import AllEvents from "./components/AllEvents";

function App() {
  const dispatch = useDispatch()
  const eventData = useSelector((state)=>state.event)
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/event`)
      const resData = await res.json()
      dispatch(setDataevent(resData))
    })()
  },[])

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" exact element={<DesktopLanding />} />
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/options" exact element={<SignInOption />} />
        <Route path="/location" exact element={<Location />} />
        <Route path="/authentication" exact element={<AuthenticationService />}>
          <Route index element={<Login />} />
          <Route path="/authentication/signup" element={<SignUp />} />
          <Route
            path="/authentication/reset_password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/authentication/forgot" element={<ForgotPassword />} />
        </Route>
        <Route path="/home" exact element={<Home />} />
        <Route path="/create" exact element={<EventCreation />} />
        <Route path="/dashboard/allbookings" exact element={<AllBookings />} />
        <Route path="/dashboard/allevents" exact element={<AllEvents />} />
        <Route path="/bookVenue/:id" exact element={<BookPage />} />

        <Route path="/bookEvent/:id" exact element={<BookEvent />} />

        <Route path="/Notification" exact element={<Notification />} />
        <Route path="/testing" exact element={<Testing />} />
        <Route path="/sharing" exact element={<Sharing />} />

        <Route path="/homeDashboard" exact element={<HomeDashboard />} />
        <Route path="/oldDashboard" element={<HomeDashboard />} />
        <Route path="/dashboard" element={<NewDashboard />} />
         <Route path="/profile" element={<UserProfile />} /> 
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Services />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="/bar" element={<Bar />} /> */}
        {/* <Route path="/pie" element={<Pie />} />/ */}
        {/* <Route path="/line" element={<Line />} /> */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        {/* <Route path="/geography" element={<Geography />} /> */}
        <Route path="/services" exact element={<Services />} />
        <Route path="/planners" exact element={<ServicePlanners />} />
        <Route path="/support" exact element={<Support />} />
        <Route path="/contact" exact element={<ContactUs />} />
        <Route
          path="/termsandconditions"
          exact
          element={<TermsAndConditions />}
        />
        <Route path="/privacyandpolicy" exact element={<PrivacyPolicy />} />

        <Route path="/step1" exact element={<Step1 />} />
        <Route path="/step2" exact element={<Step2 />} />
        <Route path="/step3" exact element={<Step3 />} />
        <Route path="/step4" exact element={<Step4 />} />
        <Route path="/step5" exact element={<Step5 />} />
        <Route path="*" exact element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
