import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import ProtectedRoute from "./context/ProtectedRoute";
import HomePage from "./pages/homepage/Homepage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Dashboard from "./pages/dashboard/Dashboard";
import ToolsPage from "./pages/tools/ToolsPage"
import DemoPage from "./pages/demo/DemoPage";
import AboutPage from "./pages/about/AboutPage";
import Weather from "./pages/weather/Weather";

function App() {
  return (
      <div className="App">
          <UserAuthContextProvider>
              {/* navihation bar*/}
            <Header/>
          </UserAuthContextProvider>
        <div className="content">
            {/* Adding firebase user-context here */}
          <UserAuthContextProvider>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                {/* Tools page is only accessible for authorized users */}
                <Route exact path='/' element={<ProtectedRoute/>}>
                    <Route path="/tools" element={<ToolsPage />} />
                </Route>
                {/* Dashboard is only accessible for authorized users */}
                <Route exact path='/' element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* Weather info is only accessible for authorized users */}
                <Route exact path='/' element={<ProtectedRoute/>}>
                    <Route path="/weather" element={<Weather />} />
                </Route>
            </Routes>
          </UserAuthContextProvider>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
