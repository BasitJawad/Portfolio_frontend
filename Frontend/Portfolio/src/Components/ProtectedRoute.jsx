import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.Login.isLoggedIn); // ✅ Correct state access

    console.log("Protected Route Check: ", isLoggedIn); // 🔍 Debug Redux state

    return isLoggedIn ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;
