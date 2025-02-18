// import { fetchCategories } from "@/api/api.client"
import { fetchLobbies } from "@/api/api.client"
import styles from "./page.module.scss"
import Image from "next/image"


export default async function HomePage() {
  const fetchedLobbies = await fetchLobbies()
  
  const lobbies = Object.entries(fetchedLobbies).map(([ k, v ]) => ({
    title: k, ...v
  }))
  
  return (<div className={styles.HomePage}>

    {lobbies.map((l, i) => <div className={styles.Lobby} key={i}>

      <h2 className={styles.LobbyTitle}> {l.title} </h2>  

      <div className={styles.LobbyItems}>
        {l.items.map(lobbyItem => <a href={lobbyItem.path} key={lobbyItem.id}> 
          <p>{lobbyItem.name}</p>

          <Image 
            width={lobbyItem.animatedSvg.mobile.original.metadata.width} 
            height={lobbyItem.animatedSvg.mobile.original.metadata.height} 
            src={lobbyItem.animatedSvg.mobile.original.src} 
            alt={lobbyItem.animatedSvg.mobile.alt} 
          />
        </a>)}  
      </div>

    </div>)}    
  </div>)
}