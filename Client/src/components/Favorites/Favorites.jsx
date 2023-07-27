import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from "./Favorites.module.css"

export default function Favorites ({onClose}){
    const myFavorites = useSelector((state )=> state.myFavorites)
    return(
        <div className={style.container}>
        {myFavorites.map(myfav=>{
            return <Card 
            key={myfav.id}
            id={myfav.id}
            name={myfav.name}
            status={myfav.status}
            species={myfav.species}
            gender={myfav.gender}
            origin={myfav.origin.name}
            image={myfav.image}
            onClose={onClose}/>
        })}
        </div>
    )
}