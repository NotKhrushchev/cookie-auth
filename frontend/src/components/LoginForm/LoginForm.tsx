import { useState } from 'react';
import SubmitButton from '../Button/SubmitButton/SubmitButton';
import InputPassword from '../Input/InputPassword/InputPassword';
import InputText from '../Input/InputText/InputText';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [isRequest, setIsRequest] = useState(false);
    const [email, setEmail] = useState<{ value: string; errorText?: string }>({
        value: '',
    });
    const [password, setPassword] = useState<{ value: string; errorText?: string }>({
        value: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsRequest(true);
        setTimeout(() => setIsRequest(false), 3000);
    };

    return (
        <div className="flex flex-col items-center px-8 py-12 shadow-xl rounded-xl w-[450px]">
            <h1 className="text-3xl font-medium mb-10">Login</h1>
            <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                    <InputText
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        setValue={setEmail}
                        value={email.value}
                        errorText={email.errorText}
                    />
                    <InputPassword
                        label={'Password'}
                        id={'password'}
                        placeholder="Enter password"
                        setValue={setPassword}
                        value={password.value}
                    />
                </div>
                <div className="mt-4 w-full flex flex-col items-center">
                    <SubmitButton isRequest={isRequest} />
                    <span
                        className="text-blue-500 cursor-pointer font-light mt-3"
                        onClick={() => navigate('/registration')}
                    >
                        Registration
                    </span>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
