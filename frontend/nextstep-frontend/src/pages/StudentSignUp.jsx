import H1 from '../components/H1';
import Gray from '../components/Gray';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <H1>Create Account</H1>
        <Gray>Sign up as a Student</Gray>
        <div className="mt-4">
          <Input placeholder="Username" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password"/> 
          <Button>Sign Up</Button>
          <div className="text-center mt-4">
            <p>
              Already have an account?{' '}
              <Link to="/signin" className="font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;