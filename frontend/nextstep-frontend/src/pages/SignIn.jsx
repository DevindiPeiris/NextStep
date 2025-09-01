import { useState } from "react";
import Gray from '../components/Gray';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import signUpLogo from '../assets/Logo_sm.png';
import signUpBack from '../assets/backArrow.png'




import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
  try {
    const response = await axios.post("http://localhost:8081/api/v1/auth/login", {
      username: form.username,
      password: form.password,
    });

    const { token, role, userId } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId);

    alert("Login successful!");

    
    if (role === "ADMIN") {
      navigate("/admindashboard");
    } else if (role === "COUNSELLOR") {
      navigate("/counsellorhome");
    } else {
      navigate("/services");
    }
    
  } catch (error) {
    console.error(error);
    alert("Login failed: Invalid username or password");
  }
 };

  return (
    <div className="signIn-container mx-0 md:mx-140 ">
            <div className="signUp-Logo flex items-center justify-center mt-[5%]">
                <img src={signUpLogo}/>
            </div>
            <div className='signUp-Back hidden md:flex items-center mt-[4%] pt-[3%]'>
                <Link to="/"><img src={signUpBack}/></Link>
                <p className="text-[13px] text-[#6D6D6D] font-bold [font-family:'Montserrat',sans-serif] px-2">Home</p>        
            </div>
            <div className="mt-[15%] md:mt-[2%] bg-white p-[3%] md:p-[6%] rounded-2xl md:shadow-md w-full max-w-m border md:border-[#d0daec]">
              <p className="text-[22px] font-bold text-center mb-2 [font-family:'Montserrat',sans-serif]">Welcome Back</p>
              <div className="text-center mb-12">
                <Gray>Sign In to your NextStep Account</Gray>
              </div>
              <div className="px-[8%] md:px-[2%]">
                <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Username</label>
                <Input name="username" value={form.username} onChange={handleChange}  placeholder="Enter your username" />
                <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Password</label>
                <Input name="password" value={form.password} onChange={handleChange} placeholder="Enter your password " type="password" />
                <div className='flex justify-center'>
                  <Button className="mt-8" onClick={handleLogin}>Sign In</Button>
                </div>
                <div className="text-center mt-6">
                  <p className="[font-family:'Montserrat',sans-serif]"> Don't have an account?{' '}
                    <Link to="/roleselection" className="font-semibold text-[#2560E0]">Sign Up </Link>
                  </p>
                </div>
              </div>
            </div> 
                   
    </div>
  );
};

export default Signin;