import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const Input = (props: IInput) => {
    const { label, id, ...otherProps } = props;
    const [value, setValue] = useState<string>('');
    const [isError, setError] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="flex flex-col max-w-[400px] min-w-[150px]">
            <div className="flex flex-col gap-2">
                <label htmlFor={id} className="font-semibold">
                    {label}
                </label>
                <input
                    id={id}
                    value={value}
                    onChange={handleChange}
                    className="rounded-[8px] font-normal text-xl py-3 px-4 border border-gray-300"
                    {...otherProps}
                />
            </div>
            {isError && <span className="text-red-600 break-words">Error</span>}
        </div>
    );
};

export default Input;
