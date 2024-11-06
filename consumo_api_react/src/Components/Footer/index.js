import styles from '@/Components/Footer/Footer.module.css'
const Footer=()=>{
    return(
        <>
        <div class={styles.footerContent}>
        {/* LADO ESQUERDO */}
        <div class={styles.footerLeft}>
            <ul class={styles.footerItems}>
                <li>Português (Brasil)</li>
                <li>English (US)</li>
                <li>Español</li>
                <li>Français (France)</li>
                <li>Italiano</li>
            </ul>
        </div>
        {/* LADO DIREIT0 */}
        <div class={styles.footerRight}>
            <ul>
                <li>The Games &copy; 2024</li>
            </ul>
        </div>
    </div>
        </>
    )
}
export default Footer