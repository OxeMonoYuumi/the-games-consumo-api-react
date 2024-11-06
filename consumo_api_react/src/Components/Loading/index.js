import styles from '@/Components/Loading/Loading.module.css'
const Loading=()=>{
    return(
        <>
            <div class={styles.loading}>
                <img src="images/loading.gif" alt="Carregando" />
                <p>Carregando...</p>
            </div>
        </>
    )
}
export default Loading