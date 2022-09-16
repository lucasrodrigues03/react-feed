import { Header } from "./components/Header"
import { Post, PostProps } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./globalStyle.css"
import styles from "./App.module.css"
import { OpenEndCloseModal } from "./components/OpenEndCloseModal"
import { useState } from "react"
import ReactModal from "react-modal"
import { Comment } from "./components/Comment"
import {CommentProps} from "./components/Comment"
interface Post extends PostProps {
  id: number
}

const posts:Post[] = [// como tem várias informações , sera um Array de Obcect.
{
  id: 1,
  author: {
    avatarUrl: "https://github.com/diego3g.png",
    name: "Diego Fernandes",
    role: "Web Developer"
  },
  content: [
    { type: "paragraph", content: "Fala galeraa 👋" },
    { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
    { type: "link", content: " 👉 jane.design/doctorcare" },
  ],
  publishedAt: new Date("2022-07-10 20:00:00")
},
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lucasrodrigues03.png",
      name: "Lucas Rodrigues",
      role: "Full Stack Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: " 👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-08 20:00:00")
  },
]

ReactModal.setAppElement("#root")

export function App() {
  const [OpenToModal, setOpenToModal] = useState(false)

  function handleOpenModal() {
    setOpenToModal(true)
  }

  function handleCloseModal() {
    setOpenToModal(false)
  }


  return (
    <div>
      <ReactModal isOpen={OpenToModal} onRequestClose={handleCloseModal}>

      </ReactModal>
    <Header />  
    <div className={styles.wrapper}>
     <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )   
        })}
      </main>
    </div>

    </div>
  
  )
}
