// import logo from './logo.svg';
import './App.css';
// import MultipleInputs from './component/MultipleInputs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './component/Register';
import Registernew from './component/Registernew';
import Thankyou from './component/Thankyou'
import Login from './component/Login';
import Otp from './component/Otp';
import Profile from './component/Profile';
import Profiletwo from './component/Profiletwo';
import Tabs from './component/Tabs';
import Personaltabs  from './component/Personaltabs';
import Changepassword from './component/Changepassword';
import Deletetab from './component/Deletetab';
import Payment from './component/Payment';
import Selectmodle from './component/Selectmodle';
import Modalform from './component/Modalform';
import Thankyoupayment from './component/Thankyoupayment'



function App() {  
  return (
    // <>
    //   {/* <MultipleInputs /> */}
    //   <Register />
    // </>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registernew />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Thankyou" element={<Thankyou />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Profiletwo" element={<Profiletwo />} />
          <Route path="/Tabs" element={<Tabs />} />
          <Route path="/Personaltabs" element={<Personaltabs />} />
          <Route path="/Changepassword" element={<Changepassword />} />
          <Route path="/Deletetab" element={<Deletetab />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Selectmodle" element={<Selectmodle />} />
          <Route path="/Modalform" element={<Modalform />} />
          <Route path="/Thankyoupayment" element={<Thankyoupayment />} />
        </Routes>
    </BrowserRouter>

  );
  
}

export default App;
