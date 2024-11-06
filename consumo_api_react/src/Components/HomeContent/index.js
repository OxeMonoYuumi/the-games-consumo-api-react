import styles from '@/Components/HomeContent/HomeContent.module.css'
import Loading from '@/Components/Loading/'
const HomeContent=()=>{
    return(
        <div class={styles.homeContent}>
        {/* CARD DE LISTA DE JOGOS */}
        <div class={styles.listGamesCard}>
        <div class={styles.title}>
            <h2>Lista de jogos</h2>
        </div>
        {/* No React inserir o outro componente Loading aqui: */}
        <Loading />
        <div class={styles.games} id="games">
            {/* Lista de jogos irá aqui */}
        </div>
    </div>
</div>
    )
}
export default HomeContent