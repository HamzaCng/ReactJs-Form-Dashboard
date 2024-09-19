import { Outlet, Navigate } from "react-router-dom";
import { useGlobalState } from '../contex/UserContex';

const AdminRoutes = () => {
    const { state } = useGlobalState();

    let isAdmin = true; // state?.user?.role == 1 // Db'de admin rol id ne geliyorsa
    console.log(state);
    
    return (        
        isAdmin ? <Outlet /> : <Navigate to='/SignIn' />
    )
}

export default AdminRoutes;