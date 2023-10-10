import { BrowserRouter } from 'react-router-dom';
import { useAuth } from "../hooks/auth.jsx"


//import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    const { user } = useAuth()
    return (
        <BrowserRouter>         
            <AuthRoutes />
        </BrowserRouter>
    )
}