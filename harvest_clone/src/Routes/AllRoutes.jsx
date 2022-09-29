import Customers from "../Pages/Customers/Customers";
import { Route, Routes } from "react-router-dom";
import Why_harvest from "../Pages/Why_harvest/Why_harvest";

import Pricing from "../Pages/Pricing/Pricing";
import Feature from "../Pages/Feature/Feature";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/Signin/Signin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/harvest" element={<h1>Harvest</h1>} />
      <Route path="/whyHarvest" element={<Why_harvest />} />

      <Route path="/features" element={<Feature />} />

      <Route path="/customers" element={<Customers />} />

      <Route path="/intregations" element={<h1>Intregations</h1>} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />

      {/* Afer sign in Routes */}
    </Routes>
  );
};

export default AllRoutes;
