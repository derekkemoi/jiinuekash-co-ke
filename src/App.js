
import logo from './logo.svg';
import './App.css';
import JoySignInSideTemplate from './screens/Signup';
import GetLoan from './screens/GetLoan';
import Verification from './screens/Verfication';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<JoySignInSideTemplate />} />
          <Route path='eligibility' element={<JoySignInSideTemplate />} />
          <Route path='get' element={<GetLoan />} />
          <Route path='verify' element={<Verification />} />
        </Routes>
      </BrowserRouter>


    </div>

  );
}

export default App;
