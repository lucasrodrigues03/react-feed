import { Header } from "./components/Header"
import { Post, PostProps } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./globalStyle.css"
import styles from "./App.module.css"

interface Post extends PostProps {
  id: number
}

const posts:Post[] = [// como tem várias informações , sera um Array de Obcect.
{
  id: 1,
  author: {
    avatarUrl: "https://pps.whatsapp.net/v/t61.24694-24/240981312_145189934677186_8003528890227098522_n.jpg?ccb=11-4&oh=01_AVy-R7RZaccqNJasyzT0jqWxh2p_WB3IZ7P3YGycWhJgQA&oe=62D8B489",
    name: "Ismaile Rodrigues",
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

export function App() {
  return (
    <div>
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
