import { Link } from 'react-router-dom';
import { useLoginContext } from '../../context/login-context';

function LoginForm() {
    const {
        formData,
        handleChange,
        loginUser,
        error,
        success
    } = useLoginContext();

    return (
        <form onSubmit={loginUser} className="register__body-form">
            
            <div className="register__form-group"> 
                <label>Email</label> 
                <input  
                    type="email"  
                    name="email"  
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                /> 
            </div> 

            <div className="register__form-group"> 
                <label>Password</label> 
                <input  
                    type="password"  
                    name="password"  
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                /> 
            </div> 

            {error && <p style={{color: "red"}}>{error}</p>}
            {success && <p style={{color: "green"}}>{success}</p>}

            <button type="submit" className="register__form-btn">
                Login
            </button>

            <Link to="/register" className='register__form-link'>
                Register
            </Link>

        </form>
    );
}

export default LoginForm;