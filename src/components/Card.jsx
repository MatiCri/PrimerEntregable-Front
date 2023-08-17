import styles from './Card.module.css'

function Card(props) {


  console.log(props)
  if(props.userName === "" || props.userSong === ""){
    return(
      <div>

      </div>
    );
  } else{

    return (
        <div className={styles.divCard}>
          <div className={styles.info}>
            <h3>Hola, {props.userName} !!</h3>
            <h3>Tu tema seleccionado es "{props.userSong}"</h3>
            <h3>Se reproducira en unos minutos</h3>
          </div>
        </div>
  );
  }

}

export default Card;
