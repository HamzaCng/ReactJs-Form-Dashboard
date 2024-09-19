import { Outlet, Navigate } from "react-router-dom";

//token varsa Auth. işlemlerinin yapıldığı sayfalara gidemesin diye.
const PrivateRoutes = () => {
    let auth = { 'token': localStorage.getItem('token')}
    return (
        !auth.token ? <Outlet /> : <Navigate to='/' />
    )
}

export default PrivateRoutes;