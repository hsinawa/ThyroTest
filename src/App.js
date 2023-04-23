
import { BrowserRouter , Route,Routes } from "react-router-dom";
import AddTestsAdmin from "./admin/AddTests";
import AllBookingsAdmin from "./admin/AllBookings";
import AdminLogin from "./admin/LoginAdmin";
import AdminScreen from "./admin/ScreenAdmin";
import AllTests from "./admin/TestsAdmin";
import './App.css';
import BookingDescription from "./components/BookingDescription";
import CartScreen from "./components/CartScreen";
import ContactDetails from "./components/contact";
import NavBar from "./Header/Navbar";
import AddressScreen from "./screen/AddressScreen";
import ComboSearch from "./screen/AllCombos";
import AllTestsSearch from "./screen/AllTests";
import BookingResult from "./screen/BookingResult";
import ConfirmationScreen from "./screen/ConfirmTest";
import HomeScreen from './screen/homescreen';
import MedicalTests from "./screen/MedicalTests";
import TestDescription from "./screen/TestDescription";
import TestCategory from "./screen/TestResultScreen";
import TrackBookings from "./screen/TrackingPage";

function App() {

  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <div className="App" >

     <NavBar/>
<br/>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/test/:id" element={<TestDescription  />} />
        <Route path="/testtype/test/:id" element={<TestDescription  />} />
        <Route path="/testtype/:category" element={<TestCategory  />} />
        <Route path="/alltests" element={<AllTestsSearch  />} />
        <Route path="/allcombos" element={<ComboSearch  />} />
        <Route path="/medicaltest" element={<MedicalTests  />} />
        {/* <Route path='/test/:id' render={(props) => <TestDescription {...props}/>}/> */}
       {admin?<Route path='/admin' element={<AdminScreen />}  />:null} 
       {admin?<Route path='/admin/tests' element={<AllTests />}  />:null} 
       {admin?<Route path='/admin/tests' element={<AllTests />}  />:null} 
       {admin?<Route path="/admin/allbookings" element={<AllBookingsAdmin />}  />:null} 
       {admin? <Route path="/admin/bookingdetail/:id" element={<BookingDescription  />} />:null} 
       <Route path="/cart" element={<CartScreen  />} />
       <Route path="/address" element={<AddressScreen  />} />
       <Route path="/confirm" element={<ConfirmationScreen  />} />
       <Route path="/trackingpage" element={<TrackBookings  />} />
       <Route path="/showbookings" element={<BookingResult  />} />
       <Route path="/bookingdetail/:id" element={<BookingDescription  />} />
      </Routes>
      </BrowserRouter>


<br/><br/>
     
   
    </div>
  );
}

export default App;
