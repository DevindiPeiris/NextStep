import H1 from '../components/H1';
import Gray from '../components/Gray';
import Input from '../components/Input';
import Button from '../components/Button';
import FileUpload from '../components/FileUpload'; 
import { Link } from 'react-router-dom';

const CounsellorSignup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mr-25 ml-25">
      <div className="max-w-md mx-auto bg-white p-10 rounded-lg shadow-lg">
        <H1>Submit Request</H1>
        <Gray>Apply to register as a counselor</Gray>
        <div className="mt-4">
          <Input placeholder="Full Name" />
          <Input placeholder="Email" />
          <Input placeholder="Contact" />
          <FileUpload placeholder="Supporting Document" />
          <Button>Submit</Button>
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

export default CounsellorSignup;

