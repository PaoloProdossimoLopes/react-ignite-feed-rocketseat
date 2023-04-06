import { Header } from './components/Header';
import { Post, PostProperties } from './components/Post';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts: PostProperties[] = [
  {
    id: 1,
    author: {
      url: 'https://github.com/paoloProdossimoLopes.png',
      name: 'Paolo Prodossimo Lopes',
      role: 'iOS Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala dev 1' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nulla earum fugit culpa vel itaque deleniti repellendus incidunt quod, quis deserunt repellat et sapiente quisquam quae iusto ipsum laboriosam reiciendis.' },
      { type: 'link', content: 'paolo.prodossimo.lopes@gmail.com'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      url: 'https://github.com/leticiaspeda.png',
      name: 'Leticia de Oliveira Speda',
      role: 'iOS Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala dev 2' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nulla earum fugit culpa vel itaque deleniti repellendus incidunt quod, quis deserunt repellat et sapiente quisquam quae iusto ipsum laboriosam reiciendis.' },
      { type: 'link', content: 'leticia.speda@gmail.com'}
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => <Post 
              id={post.id}
              key = { post.id }
              author = { post.author }
              publishedAt = { post.publishedAt }
              content = { post.content }
            />)
          }
        </main>
      </div>
    </div>
  )
}
