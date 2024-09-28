import {
    ChangeEvent,
    Dispatch,
    InputHTMLAttributes,
    SetStateAction,
} from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    setValue: Dispatch<SetStateAction<any>>;
    errorText?: string;
}

const InputText = (props: IInput) => {
    const { label, id, value, setValue, errorText, ...otherProps } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ value: e.target.value, errorText });
    };

    return (
        <div className="flex flex-col max-w-[450px] min-h-[98px]">
            <div className="flex flex-col gap-2">
                <label htmlFor={id} className="font-semibold text-sm">
                    {label}
                </label>
                <input
                    id={id}
                    value={value}
                    onChange={handleChange}
                    className={
                        'rounded-[8px] transition outline-none duration-150 focus:border-blue-500 ' +
                        'w-full text-l py-3 px-4 border border-gray-300'
                    }
                    {...otherProps}
                />
            </div>
            <span className="text-red-600 break-words text-sm">{errorText}</span>
        </div>
    );
};

export default InputText;
