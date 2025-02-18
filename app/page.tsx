// import { fetchCategories } from "@/api/api.client"
import styles from "./page.module.scss"

export default async function HomePage() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  
  return (<div className={styles.HomePage}>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
    
  )
}