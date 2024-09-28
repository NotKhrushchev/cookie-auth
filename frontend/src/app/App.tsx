import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const App = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        location?.pathname == '/' && navigate('/registration');
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {children}
        </div>
    );
};

export default App;
