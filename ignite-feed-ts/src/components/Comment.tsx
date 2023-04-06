import styles from './Comment.module.css';

import { Avatar } from './Avatar';
import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';

interface CommentProperties {
  content: string
  avatarURL: string
  onRemoveComment: (content: string) => void
}

export function Comment(properties: CommentProperties) {
  const [likeCounter, setLikeCounter] = useState(0);

  function handleDeleteComment() {
    properties.onRemoveComment(properties.content)
  }

  function handleLikeAction() {
    setLikeCounter((newerLikeCounter => {
      return newerLikeCounter + 1
    }))
  }

  return (
    <div className={styles.comment}>
      <Avatar src={properties.avatarURL} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='11 de maio as 08:13h' dateTime='2022-05-11 08:13:30'>Publicado a 1h</time>
            </div>

            <button onClick = {handleDeleteComment} title='Apagar comentario'>
              <Trash size= {20}/>
            </button>
          </header>
          <p>{properties.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeAction}>
            <ThumbsUp />
            Aplaudir <span>{likeCounter}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
  	