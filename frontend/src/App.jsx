import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Pages/LoginSignup";
import Home from "./Pages/Home";
import FeaturePage from "./Pages/FeaturePage";
import Dashboard from "./Pages/Dashboard";
import Billing from "./Pages/Billing";
import Inventory from "./Pages/Inventory";
import Finance from "./Pages/Finance";
import Customers from "./Pages/Customers";
import Sales from "./Pages/Sales";
import Reports from "./Pages/Reports";
import Pricing from "./Pages/Pricing";
import ProtectedRoute from "./Components/Jsfiles/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/feature"
            element={
              <ProtectedRoute>
                <FeaturePage />
              </ProtectedRoute>
            }
          >
            {/* Nested routes */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="billing" element={<Billing />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="customers" element={<Customers />} />
            <Route path="sales" element={<Sales />} />
            <Route path="finance" element={<Finance />} />
            <Route path="reports" element={<Reports />} />
          </Route>

          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
