import { Link, useNavigate } from 'react-router-dom';
import signUpLogo from '../assets/Logo_sm.png';
import signUpBack from '../assets/backArrow.png'

const SignUp = () => {
    const navigate = useNavigate();
     const [role, setRole] = useState('student');
    return(
        <div className="signUp-container mx-0 md:mx-180">
            <div className="signUp-Logo flex items-center justify-center mt-7 md:mt-10 g-amber-300">
                <img src={signUpLogo}/>
            </div>
            <div className='signUp-Back hidden md:flex items-center g-amber-400 py-5 pt-6'>
                <Link to="/"><img src={signUpBack}/></Link>
                <p className="text-[13px] text-[#6D6D6D] font-bold [font-family:'Montserrat',sans-serif] px-2">Home</p>        
            </div>
            <div className='signUp-RoleSelection flex items-center justify-center bg-[#F3F4F6] py-2 rounded-lg mx-4 my-3 md:mx-0 md:my-0'>
                <button className='role-student w-1/2' onClick={setRole('student')}><p>Student</p></button>
                <button className='role-counselor w-1/2' onClick={setRole('counselor')}><p>Counselor</p></button>
            </div>
        </div>
    )
}

export default SignUp;