import LoginForm from "../components/login-form/login-form"
import LoginInfo from "../components/login-info/login-info"

function Login() {
    return(
        <>
        <section className="register">
            <div className="register__content container">
                    <LoginInfo/>
                <div className="register__content-body">
                    <LoginForm/>
                </div>
            </div>
        </section>
        </>
    )
}
export default Login