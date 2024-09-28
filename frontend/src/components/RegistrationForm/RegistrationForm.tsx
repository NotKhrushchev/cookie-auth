import { useEffect, useState } from 'react';
import SubmitButton from '../Button/SubmitButton/SubmitButton';
import InputPassword from '../Input/InputPassword/InputPassword';
import InputText from '../Input/InputText/InputText';
import { useNavigate } from 'react-router-dom';
import checkEmailValid from '../../shared/lib/checkEmailValid/checkEmailValid';

const RegistrationForm = () => {
    const [isRequest, setIsRequest] = useState<boolean>(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState<{ value: string; errorText?: string }>({
        value: '',
    });
    const [password, setPassword] = useState<{ value: string; errorText?: string }>({
        value: '',
    });
    const [confirmPassword, setConfirmPassword] = useState<{
        value: string;
        errorText?: string;
    }>({ value: '' });

    const checkRegFormDataValid = () => {
        const isEmailValid = checkEmailValid(email.value);
        const isPasswordsMatch = password.value === confirmPassword.value;
        console.log(isPasswordsMatch);

        if (!email.value || !isEmailValid || !password.value || !isPasswordsMatch) {
            !email.value && setEmail({ ...email, errorText: 'Email is required' });
            !isEmailValid &&
                email.value &&
                setEmail({ ...email, errorText: 'Email is not valid' });
            !password.value &&
                setPassword({ ...password, errorText: 'Password is required' });
            !isPasswordsMatch &&
                setConfirmPassword({
                    ...confirmPassword,
                    errorText: "Passwords don't match",
                });
            return false;
        } else {
            return true;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (checkRegFormDataValid()) {
            setIsRequest(true);
            setTimeout(() => setIsRequest(false), 3000);
        }
    };

    useEffect(() => {
        if (email.errorText && checkEmailValid(email.value) && email)
            setEmail({ ...email, errorText: '' });
    }, [email.value]);

    useEffect(() => {
        if (password.errorText) setPassword({ ...password, errorText: '' });
    }, [password.value]);

    useEffect(() => {
        if (confirmPassword.errorText && password.value)
            setConfirmPassword({ ...confirmPassword, errorText: '' });
    }, [confirmPassword.value, password.value]);

    return (
        <div className="flex flex-col items-center px-8 py-12 shadow-xl rounded-xl w-[450px]">
            <h1 className="text-3xl font-medium mb-10">Registration</h1>
            <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                    <InputText
                        id="email"
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
                        errorText={password.errorText}
                    />
                    <InputPassword
                        label={'Confirm password'}
                        id={'confirm-password'}
                        placeholder="Confirm password"
                        setValue={setConfirmPassword}
                        errorText={confirmPassword.errorText}
                    />
                </div>
                <div className="mt-4 w-full flex flex-col items-center">
                    <SubmitButton isRequest={isRequest} />
                    <span
                        className="text-blue-500 cursor-pointer font-light mt-3"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </span>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
