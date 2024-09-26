import { ChangeEvent, InputHTMLAttributes, useRef, useState } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const InputText = (props: IInput) => {
    const { label, id, ...otherProps } = props;
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');
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
                <input
                    id={id}
                    ref={ref}
                    value={value}
                    onChange={handleChange}
                    className={
                        'rounded-[8px] transition outline-none duration-150 focus:border-blue-500 ' +
                        'w-full text-l py-3 px-4 border border-gray-300'
                    }
                    {...otherProps}
                />
            </div>
            <span className="text-red-600 break-words text-sm">{error}</span>
        </div>
    );
};

export default InputText;
