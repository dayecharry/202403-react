import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Register from "./Register/Register";
import NotFound from "./NotFound/NotFound";
import Login from "./Login/Login";
import AuthRoute from "./Auth/AuthRoute";
import Profile from "./Profile/Profile";
import { useState } from "react";

function App() {
  const dataLocal = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(dataLocal);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUserData={setUserData} />} />
        <Route
          path="/profile"
          element={
            <AuthRoute
              user={userData}
              component={<Profile token={userData.token} />}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
