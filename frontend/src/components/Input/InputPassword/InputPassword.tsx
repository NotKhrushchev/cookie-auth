import { ChangeEvent, useRef, useState } from 'react';
import { IInput } from '../InputText/InputText';
import EyeOpen from '../../../shared/assets/eye-open-svgrepo-com.svg';
import EyeClose from '../../../shared/assets/eye-close-svgrepo-com.svg';

const InputPassword = (props: IInput) => {
    const { label, id, ...otherProps } = props;
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="flex flex-col max-w-[450px] min-h-[98px]">
            <div className="flex flex-col gap-2">
                <label htmlFor={id} className="font-semibold text-sm">
                    {label}
                </label>
                <div className="relative">
                    <input
                        id={id}
                        ref={ref}
                        value={value}
                        type={isShowPassword ? 'text' : 'password'}
                        onChange={handleChange}
                        className={
                            'rounded-[8px] transition outline-none duration-150 focus:border-blue-500 ' +
                            'w-full text-l py-3 px-4 pr-12 border border-gray-300'
                        }
                        {...otherProps}
                    />
                    <div
                        className="w-[25px] absolute right-4 top-3 cursor-pointer"
                        onClick={() => setIsShowPassword((prev) => !prev)}
                    >
                        {isShowPassword ? <img src={EyeClose} /> : <img src={EyeOpen} />}
                    </div>
                </div>
            </div>
            <span className="text-red-600 break-words text-sm">{error}</span>
        </div>
    );
};

export default InputPassword;
