const checkEmailValid = (email: string, required?: boolean) => {
    if (!email && required) return 'Email is required';
    if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) && email)
        return 'Email is not valid';
    return '';
};

export default checkEmailValid;
