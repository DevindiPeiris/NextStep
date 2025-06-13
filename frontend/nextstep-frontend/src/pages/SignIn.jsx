import H1 from '../components/H1';
import Gray from '../components/Gray';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mr-25 ml-25">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <H1>Welcome Back</H1>
        <Gray>Sign in to your account</Gray>
        <div className="mt-4">
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
          <Button onClick={() => navigate('/services')}>Sign In</Button>
          <div className="text-center mt-4">
            <p>
              Don't have an account?{' '}
              <Link to="/roleselection" className="font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;