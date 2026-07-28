import RegisterForm from "../components/register-form/register-form"
import RegisterInfo from "../components/register-info/register-info"

function Register() {
    return(
        <>
        <section className="register">
            <div className="register__content container">
                <RegisterInfo/>
                <div className="register__content-body">
                    <RegisterForm/>
                </div>
            </div>
        </section>
        </>
    )
}
export default Register