import "../../assets/css/login.css"

import Header from "../../components/header"
import Footer from "../../components/footer"

import Logo from "../../assets/img/logo.png"

export default function Login() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <img src={Logo} alt />
                    <span>email</span>
                    <input type="email" />
                    <span>senha</span>
                    <input type="password" className="pass" />
                    <button>logar</button>
                </section>
            </main>
            <Footer/>
        </div>



    )


}
