import styles from './Header.module.css'

import logo from '../images/ignite-logo.svg'

export function Header() {
  return (
   <header className={styles.header}>
     <img src={logo} alt="Logotipo do ignite"/>
     <div><strong >Ignite Feed</strong></div>
   </header>
  );
}