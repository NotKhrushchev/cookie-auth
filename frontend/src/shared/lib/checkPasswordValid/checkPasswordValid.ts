const checkPasswordValid = (password: string) => {
    if (!password) return 'Password is required';
    if (password && password.length < 8) return 'Min password length is 8 characters';
    return '';
};

export default checkPasswordValid;
