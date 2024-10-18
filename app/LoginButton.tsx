import { useRouter } from 'next/router';

const LoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('./HankoAuth');
  };

  return (
    <button 
      onClick={handleLogin}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
     Click To Login
    </button>
  );
};

export default LoginButton;