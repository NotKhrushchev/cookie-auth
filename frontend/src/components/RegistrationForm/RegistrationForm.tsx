import { useState } from 'react';
import SubmitButton from '../Button/SubmitButton/SubmitButton';
import InputPassword from '../Input/InputPassword/InputPassword';
import InputText from '../Input/InputText/InputText';

const RegistrationForm = () => {
    const [isRequest, setIsRequest] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsRequest(true);
        setTimeout(() => setIsRequest(false), 3000);
    };

    return (
        <div className="flex flex-col items-center px-8 py-12 shadow-xl rounded-xl w-[450px]">
            <h1 className="text-3xl font-medium mb-10">Registration</h1>
            <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 w-full">
                    <InputText
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                    />
                    <InputPassword
                        label={'Password'}
                        id={'password'}
                        placeholder="Enter password"
                    />
                    <InputPassword
                        label={'Confirm password'}
                        id={'confirm-password'}
                        placeholder="Confirm password"
                    />
                </div>
                <div className='mt-4 w-full flex flex-col items-center'>
                    <SubmitButton isRequest={isRequest} />
                    <span className="text-blue-500 cursor-pointer font-light mt-3">
                        Login
                    </span>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
