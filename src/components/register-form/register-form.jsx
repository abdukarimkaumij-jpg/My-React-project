import { Link } from 'react-router-dom';
import './register-form.css';
import { useRegisterContext } from '../../context/register-context';

function RegisterForm() {
    const {
        formData,
        handleChange,
        registerUser,
        error,
        success
    } = useRegisterContext();

    return (
        <form onSubmit={registerUser} className="register__body-form">

            <div className="register__form-group"> 
                <label>Full Name</label> 
                <input  
                    type="text"  
                    name="full_name"  
                    placeholder="Enter your full name"
                    value={formData.full_name}
                    onChange={handleChange}
                /> 
            </div> 

            <div className="register__form-group"> 
                <label>Email</label> 
                <input  
                    type="email"  
                    name="email"  
                    placeholder="Enter your email name"
                    value={formData.email}
                    onChange={handleChange}
                /> 
            </div> 

            <div className="register__form-group"> 
                <label>Password</label> 
                <input  
                    type="password"  
                    name="password"  
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                /> 
            </div> 

            <button type="submit" className="register__form-btn">
                Register
            </button>

            {/* Xatolik yoki success */}
            {error && <p style={{color: "red"}}>{error}</p>}
            {success && <p style={{color: "green"}}>{success}</p>}

            <Link className='register__form-link' to="/login">
                login
            </Link>

        </form>
    );
}

export default RegisterForm;