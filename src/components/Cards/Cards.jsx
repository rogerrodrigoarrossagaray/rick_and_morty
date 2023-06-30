import Card from "../Card/Card"
import styles from "./Cards.module.css"

export default function Cards(props) {
   return (<div className={styles.container}>
      {props.characters.map(elemento => {
         return <Card 
            key={elemento.id}
            id={elemento.id}
            name={elemento.name}
            status={elemento.status}
            species={elemento.species}
            gender={elemento.gender}
            origin={elemento.origin.name}
            image={elemento.image}
            onClose={props.onClose}/>
      })}
   </div>)
}
