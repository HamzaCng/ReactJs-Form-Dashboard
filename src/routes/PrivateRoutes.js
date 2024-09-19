import { Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    let auth = { 'token': localStorage.getItem('token')}
    return (
        // auth.token ? <Outlet /> : <Navigate to='/SignIn' /> olması gereken.
        auth.token ? <Outlet />  : <Outlet />  

    )
}

export default PrivateRoutes;