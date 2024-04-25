import { Link } from "react-router-dom"
import { LandingPage } from "../../pages/LandingPage"
import { SiteTwo } from "../../pages/SiteTwo"
import styles from './nav.module.scss'

export const NavBar = () => {
  return (
    <>
    <nav className={styles.navbar}>
        <h1>Den seje butik</h1>
        <ul>
            <Link to={'/forside'}>Hjem</Link>
            <Link to={'/andenside'}>Produkter</Link>
        </ul>
    </nav>
    </>
  )
}
