import InputPassword from "../Input/InputPassword/InputPassword";
import InputText from "../Input/InputText/InputText";

const RegistrationForm = () => {
    return (
        <div className="flex flex-col items-center px-8 py-12 shadow-xl rounded-xl w-[450px]">
            <h1 className="text-3xl font-medium mb-10">Registration</h1>
            <form className="w-full">
                <div className="flex flex-col gap-2">
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
            </form>
        </div>
    );
};

export default RegistrationForm;
