import NavComponent from '../Nav/NavComponent'
import NavContent from './NavContent'
import  styles  from './Store.module.css'
import StoreNav from './StoreNav'

const Store = () => {
    return <main className={styles.mainStore}>
        <NavComponent mode='store'/>
        <NavContent/>
        <StoreNav/>
    </main>
}

export default Store 