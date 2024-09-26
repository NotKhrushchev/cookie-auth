import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../../App';
import RegistrationForm from '../../../components/RegistrationForm/RegistrationForm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App children={<Outlet />} />,
        children: [
            {
                path: 'registration',
                element: <RegistrationForm />,
            },
        ],
    },
]);

export default router;
