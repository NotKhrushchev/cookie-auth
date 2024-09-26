interface ISubmitBtn {
    isRequest: boolean;
}

const SubmitButton = (props: ISubmitBtn) => {
    const { isRequest } = props;

    return (
        <button className="bg-blue-500 rounded-md px-6 py-3 text-white w-full hover:bg-blue-600 transition">
            {!isRequest ? 'Submit' : 'Submitting...'}
        </button>
    );
};

export default SubmitButton;
