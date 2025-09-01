import { useState } from "react";
import H1 from '../components/H1';
import Gray from '../components/Gray';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import signUpLogo from '../assets/Logo_sm.png';
import signUpBack from '../assets/backArrow.png'
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:8081/api/v1/auth/register", {
        username: form.username,
        email: form.email,
        password: form.password
      });
      alert("Signup successful! Please log in.");
      navigate("/signin");
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="signUp-container mx-0 md:mx-180">
            <div className="signUp-Logo flex items-center justify-center mt-7 md:mt-10">
                <img src={signUpLogo}/>
            </div>
            <div className='signUp-Back hidden md:flex items-center py-5 pt-6'>
                <Link to="/"><img src={signUpBack}/></Link>
                <p className="text-[13px] text-[#6D6D6D] font-bold [font-family:'Montserrat',sans-serif] px-2">Home</p>        
            </div>
            <div className="mt-4 bg-white p-8 rounded-2xl shadow-md w-full max-w-m border border-[#d0daec]">
              <p className="text-[22px] font-bold text-center mb-2 [font-family:'Montserrat',sans-serif]">Join as Student</p>
              <div className="text-center mb-8">
                <Gray>Create your account to start your journey</Gray>
              </div>
              <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Username</label>
              <Input name="username" value={form.username} onChange={handleChange} placeholder="Create a username" />
              <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Email</label>
              <Input name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" type="email" />
              <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Password</label>
              <Input name="password" value={form.password} onChange={handleChange} placeholder="Create a password" type="password" />
              <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Confirm Password</label>
              <Input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm your password" type="password"/> 
              <div className='mt-8 flex items-center justify-center'>
                <Button onClick={handleSignup}>Sign Up</Button>  
              </div>
              <div className="text-center mt-4 mb-4">
                <p className="[font-family:'Montserrat',sans-serif]">
                  Already have an account?{' '}
                  <Link to="/signin" className="font-semibold text-[#2560E0]">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
    </div>
  );
};

export default Signup;