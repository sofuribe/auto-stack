import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManuForm from './Inventory/ManuForm';
import ManuList from './Inventory/ManuList';
import ModelList from './Inventory/ModelList';
import ModelForm from './Inventory/ModelForm';
import AutoMobileForm from './Inventory/AutoMobileForm';
import AutoList from './Inventory/AutoMobileList';
import TechnicianForm from './Service/TechnicianForm';
import SalesPersonForm from './Sales/SalesPersonForm';
import CustomerForm from './Sales/CustomerForm';
import SalesList from './Sales/SalesList';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="manufacturers">
            <Route path="" element={<ManuList />} />
            <Route path="new" element={<ManuForm />} />
          </Route>

          <Route path='models'>
            <Route path="" element={<ModelList />} />
            <Route path="new" element={<ModelForm />} />
          </Route>

          <Route path='automobiles'>
            <Route path="" element={<AutoList />} />
            <Route path="new" element={<AutoMobileForm />} />
          </Route>

          <Route path='technicians'>
            <Route path="new" element={<TechnicianForm />} />

          </Route>

          <Route path='salesperson'>
            <Route path="new" element={<SalesPersonForm />} />

          </Route>

          <Route path='customers'>
            <Route path="new" element={<CustomerForm />} />

          </Route>

          <Route path='sales' element={<SalesList />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
