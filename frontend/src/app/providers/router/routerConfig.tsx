import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../../App';
import RegistrationForm from '../../../components/RegistrationForm/RegistrationForm';
import LoginForm from '../../../components/LoginForm/LoginForm';

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <App children={<Outlet />} />,
        children: [
            {
                path: 'registration',
                element: <RegistrationForm />,
            },
            {
                path: 'login',
                element: <LoginForm />,
            },
        ],
    },
]);

export default routerConfig;
