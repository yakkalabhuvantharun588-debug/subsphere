import React,{useContext} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AuthProvider,{AuthContext} from "./context/AuthContext";
import ThemeProvider,{ThemeContext} from "./context/ThemeContext";
import SubscriptionProvider from "./context/SubscriptionContext";

import Login from "./pages/Login";
import Signup from "./Pages/Signup";
import PlansPage from "./pages/PlansPage";
import ActiveSubscription from "./pages/ActiveSubscription";
import ComparePage from "./pages/ComparePage";

import Header from "./components/Header";

import "./App.css";

function AppContent(){

  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  const plans=[
    {id:1,name:"Basic",monthly:199,yearly:1999,recommended:false,benefits:["720p","1 device"]},
    {id:2,name:"Standard",monthly:399,yearly:3999,recommended:true,benefits:["1080p","2 devices"]},
    {id:3,name:"Premium",monthly:699,yearly:6999,recommended:false,benefits:["4K","4 devices"]}
  ];

  if(!user){
    return(
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Login/>}/>
      </Routes>
    );
  }

  return(

    <div className={`app ${theme}`}>

      <div className="layout">

        <nav className="sidebar">
          <h3>Menu</h3>
          <Link to="/">Plans</Link>
          <Link to="/active">Active Subscription</Link>
          <Link to="/compare">Compare Plans</Link>
        </nav>

        <div className="main-content">

          <Header/>

          <Routes>
            <Route path="/" element={<PlansPage plans={plans}/>}/>
            <Route path="/active" element={<ActiveSubscription/>}/>
            <Route path="/compare" element={<ComparePage plans={plans}/>}/>
          </Routes>

        </div>

      </div>

    </div>
  );
}

export default function App(){
  return(
    <AuthProvider>
      <ThemeProvider>
        <SubscriptionProvider>
          <BrowserRouter>
            <AppContent/>
          </BrowserRouter>
        </SubscriptionProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}