import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserForm from "./Component/Form/UserForm";
import Index from "./Component/Index";
import ViewStudent from "./Component/viewStudent";
import Edit from "./Component/Edit";
import Address from "./Component/Address";
import Navbar from "./Component/Navbar";
import EditAddress from "./Component/EditAddress";
import DateTime from "./Component/DateTime";

function App() {
  
  return (
    <div class="container-fluid">
      <div className="App">
      <Navbar  />
      
       <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="AddStudent" element={<UserForm />} />
            <Route path="AddStudent/:id" element={<Edit />} />
            <Route path="/students/:id" element={<ViewStudent />} />
            <Route path="/students/:query" element={<ViewStudent />} />
            <Route path="/Address/:id" element={<Address />} />
            <Route path="EditAddress/:id" element={<EditAddress/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
