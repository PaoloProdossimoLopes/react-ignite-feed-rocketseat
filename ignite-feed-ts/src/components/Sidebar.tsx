import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
      className = {styles.cover} 
      src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=50" 
      />

      <div className={styles.profile}>
        <Avatar isBordered={true} src="https://github.com/paoloProdossimoLopes.png"/>
        <strong>Paolo Prodossimo Lopes</strong>
        <span>iOS Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}