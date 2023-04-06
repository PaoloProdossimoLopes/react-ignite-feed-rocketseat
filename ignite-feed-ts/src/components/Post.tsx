import styles from './Post.module.css';
import { Avatar } from './Avatar'
import { Comment } from './Comment';

import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale'; 
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

export interface PostContent {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostAuthor {
  name: string
  role: string
  url: string
}

export interface PostProperties {
  id: number
  publishedAt: Date
  author: PostAuthor
  content: PostContent[]
}

export function Post({author, publishedAt, content}: PostProperties) {

  const [comments, setComments] = useState(['Post muito bacana']);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { 
    locale: ptBR, 
    addSuffix: true
  })

  function handle(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newComment])
    setNewComment('')
 }

 function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
  event.target.setCustomValidity('')
    setNewComment(event.target.value)
 }

  function handleDelteComment(contentToDelete: string) {
    const commentWithoutDeletedOne = comments.filter((content) => {
      return content !== contentToDelete 
    })
    setComments(commentWithoutDeletedOne)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatorio!')
  }

  const newCommentIsEmpty = newComment.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar isBordered={true} src={author.url}/>
          <div className={styles.authorInformation}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') return <p key={line.content}>{line.content}</p>
            else if (line.type === 'link') return <p key={line.content}>👉 <a href="#">{line.content}</a></p>
          })
        }
      </div>

      <form onSubmit={handle} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name='commentTextArea'
          placeholder='Deixe um comentario'
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          	<button type='submit' title='Envirar' disabled={newCommentIsEmpty} >Enviar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => <Comment 
            key = {comment} 
            content = { comment }
            avatarURL = 'https://github.com/paoloProdossimoLopes.png'
            onRemoveComment = { (content) => handleDelteComment(content) }
          />)
        }
      </div>
    </article>
  )
}