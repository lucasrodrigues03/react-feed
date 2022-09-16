import { useState } from "react"
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"


export interface CommentProps {
  content: string
  onOpenNewModal: () => void
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onOpenNewModal, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount ] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucasrodrigues03.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Rodrigues</strong>
              <time title="07 de Julho às 21:16" dateTime="2022-07-07">Cerca de 1h atrás</time>
            </div>
            
              <button onClick={onOpenNewModal} title="Deletar comentário">

                <Trash size={24} />
              </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
           <button onClick={handleLikeComment}> {/* nunca passar a função executando() nos atributos on... */}
            <ThumbsUp size={22}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}