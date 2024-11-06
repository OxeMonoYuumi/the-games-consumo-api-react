import styles from "@/Components/LoginContent/LoginContent.module.css"
const LoginContent = () =>{
    return(
        <>
        <div className={styles.loginContent}>
            {/* div para a logo */}
            <div className={styles.logo}>
                <img src="/images/thegames_logo.png" alt="The Games" className={styles.logoImg}></img>
            </div>
            {/* div para login card */}
            <div className={styles.loginCard}>
                <div className={styles.loginCardHeader}>
                    <h3>Faça seu login</h3>
                </div>
                {/* Formulário */}
                <div className={styles.loginCardBody}>
                    <form className="formPrimary">
                        <input type="email" name="email" id="email" placeholder="Digite seu email" className={`${styles.input} ${"inputPrimary"}`}/>
                        <input type="password" name="password" id="password" placeholder="Digite sua senha" className={`${styles.input} ${"inputPrimary"}`}/>
                        <input type="submit" value="Entrar" className={`${styles.input} ${"btnPrimary"}`}/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default LoginContent