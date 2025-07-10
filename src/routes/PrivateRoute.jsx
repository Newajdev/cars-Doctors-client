import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation, } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loadign} = useContext(AuthContext);
    const location = useLocation();
    

    if(loadign){
        return <span className="loading loading-dots loading-xl"></span>
    }

    if(user?.email){
        return children;
    }


    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRoute;