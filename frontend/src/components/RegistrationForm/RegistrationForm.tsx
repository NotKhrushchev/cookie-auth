import { useEffect, useState } from 'react';
import SubmitButton from '../Button/SubmitButton/SubmitButton';
import InputPassword from '../Input/InputPassword/InputPassword';
import InputText from '../Input/InputText/InputText';
import { useNavigate } from 'react-router-dom';
import checkEmailValid from '../../shared/lib/checkEmailValid/checkEmailValid';
import checkPasswordValid from '../../shared/lib/checkPasswordValid/checkPasswordValid';

const RegistrationForm = () => {
    const [isRequest, setIsRequest] = useState<boolean>(false);
    const [email, setEmail] = useState<{ value: string; errorText?: string }>({
        value: '',
    });
    const [isShowErrors, setIsShowErrors] = useState<boolean>(false);
    const [password, setPassword] = useState<{ value: string; errorText?: string }>({
        value: '',
    });
    const [confirmPassword, setConfirmPassword] = useState<{
        value: string;
        errorText?: string;
    }>({ value: '' });
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        !isShowErrors && setIsShowErrors(true);

        if (!(email.errorText || password.errorText || confirmPassword.errorText)) {
            setIsRequest(true);
            setTimeout(() => setIsRequest(false), 3000);
        }
    };

    useEffect(() => {
        setEmail({ ...email, errorText: checkEmailValid(email.value, true) });
    }, [email.value]);

    useEffect(() => {
        setPassword({ ...password, errorText: checkPasswordValid(password.value) });
    }, [password.value]);

    useEffect(() => {
        const isPasswordsMatch = confirmPassword.value === password.value;
        setConfirmPassword({
            ...confirmPassword,
            errorText: !isPasswordsMatch ? "Passwords don't match" : '',
        });
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
                        errorText={isShowErrors ? email.errorText : ''}
                    />
                    <InputPassword
                        label={'Password'}
                        id={'password'}
                        placeholder="Enter password"
                        setValue={setPassword}
                        errorText={isShowErrors ? password.errorText : ''}
                    />
                    <InputPassword
                        label={'Confirm password'}
                        id={'confirm-password'}
                        placeholder="Confirm password"
                        setValue={setConfirmPassword}
                        errorText={isShowErrors ? confirmPassword.errorText : ''}
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
