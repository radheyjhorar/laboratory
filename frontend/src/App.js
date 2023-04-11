
import React from 'react';
import {  Routes, Route, useLocation, useNavigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import {  SideBar } from './_shared';
import { Dashboard, NoPage, Customer, NewCustomer } from './pages';

import { Register, Login, AuthUser, getPageName, isAuthPage } from './components';
import './App.css';
import Header from './_shared/header/Header';
//  import { library } from "@fortawesome/fontawesome-svg-core";
// import { , faCheckCircle, faQuestionCircle, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
// library.add(faTimesCircle, faCheckCircle, faQuestionCircle, faGraduationCap);


//toast.configure();


const App = (props) => {

   const {getToken} = AuthUser();

   const location = useLocation();

   const navigate = useNavigate();
   
   const token = getToken();
    
   return (
      
      <>
         {/* <Headers /> */}
        
         {
             ( (!isAuthPage) && (!token))?navigate('/login'):null
           
         }
         <div className="container-fluid">
            <div className="row">
            {/* {  ( isAuthPage && token)? */}
            <SideBar pageName={getPageName(location.pathname)}/>
            {/* } */}
                  <Routes>
                    ((!token)?(<>
                     <Route path="login" element={<Login />} />
                     <Route path="register" element={<Register />} />
                  </>):(<>
                     <Route index element={<Dashboard />} />
                     <Route path="customer" element={<Customer />} />
                     <Route path="new-customer/:customerId?" element={<NewCustomer />} />                     
                     
                     {/* <Route path="login" element={<Login />} /> */}
                     
                     {/* <Route path="search/:cityName" element={<Search />} />
                  <Route path="school/:schoolId" element={<Schools />} />
                  <Route path="about-us" element={<Blogs />} />
                  <Route path="contact" element={<Contact />} /> */}
                     </>
                    )

                     <Route path="*" element={<NoPage />} />



                  </Routes>

                  {/* <Footer  /> */}

               </div>
            </div>
   
            </>


   );

}

export default App;  