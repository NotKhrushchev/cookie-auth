const checkEmailValid = (email: string) =>
    !!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

export default checkEmailValid;