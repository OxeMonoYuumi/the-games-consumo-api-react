import styles from '@/Components/Menu/Menu.module.css'
const Menu=()=>{
    return(
        <>
        <nav class={styles.navbar}>
    <div class={styles.logo}>
        <a href="#">
            <img src="/images/thegames_symbol.png" alt="The Games" />
        </a>
    </div>
    <div class={styles.menu}>
        <ul class={styles.menuItems} id="menuItems">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Cadastrar jogos</a>
            </li>
            <li>
                <a href="#">Logout</a>
            </li>
        </ul>
    </div>
    <div class={styles.menuBtn} id="menuBtn">
        <i id="menuIcon">
            {/* Aqui será incluído um icone do React Icons */}
        </i>
    </div>
</nav>
        </>
    )
}
export default Menu