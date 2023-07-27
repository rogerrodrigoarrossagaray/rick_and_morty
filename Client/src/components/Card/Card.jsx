import React, { useState } from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../../Redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";

export default function Card(props) {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [isFav,setIsFav] = useState(false)
  
   function handleFavorite(){
    if (!isFav){
      setIsFav(true);
      dispatch(addFav({...props}))
    }
    else {
      setIsFav(false)
      dispatch(removeFav(props.id))
    }
   }
   useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
  return (
     <div className={styles.character_Card}>
         <div className={styles.character_photo_container}>
          <img src={props.image} alt={props.name}/>
      </div>
      <div className={styles.character_info}>
       <Link to={`/detail/${props.id}`}> <h1 className={styles.ver}>{props.name}</h1></Link>
        
         <button onClick={()=>{props.onClose(props.id)}}>Delete Character</button>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      </div>
      </div>
   )
 }

