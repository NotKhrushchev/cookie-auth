import Input from './components/Input/Input';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center p-8 border-blue-500 border-[2px] rounded-xl">
                <h1 className="text-3xl font-bold mb-8">Registration</h1>
                <form>
                    <div className="flex flex-col gap-4">
                        <Input id="email" label="Email" placeholder="Enter your email" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default App;
