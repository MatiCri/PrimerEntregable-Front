import styles from './Form.module.css'
import { useState } from 'react'

let idError = 0;


const Form = (props) => {


    const [nombre, setNombre] = useState('')
    const [tema, setTema] = useState('')
    const [errors, setErrors] = useState([ ])


    const handleSubmit = (event) => {
        event.preventDefault()
        let newErrors = [];

        if(nombre.trim() === '' || tema.trim() === '' || nombre.trim() !== nombre){
            console.log("vacio")
            newErrors.push({id: idError++, message: "Ningun campo puede estar vacio o tener espacios al comienzo"})
        }
        if(nombre.length < 3){
            console.log("numeros")
            newErrors.push({id: idError++, message: "El nombre no puede tener menos de 3 caracteres"})
        }
        if(tema.length < 6){
            console.log("contiene p")
            newErrors.push({id: idError++, message: "El tema no puede tener menos de 6 caracteres"})
        }

        if(newErrors.length === 0){
            props.onSubmit(nombre, tema)
            setNombre('')
            setTema('')
            setErrors([])
        }else{
            setErrors(newErrors);
        }

        
        
    }


    return(

        <div className = {styles.DivForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.titulo}>Nombre y Tema Preferido</h1>
            <br />
                <label className={styles.label}>
                    <input
                        className={styles.input}
                        type='text'
                        value={nombre}
                        onChange={(event) => {setNombre(event.target.value), setErrors([])}}
                        placeholder='Introduce tu nombre aqui...'
                    />
                </label>
                <label className={styles.label}>
                    <input
                        className={styles.input}
                        type='text'
                        value={tema}
                        onChange={(event) => {setTema(event.target.value), setErrors([])}}
                        placeholder='Introduce tu tema preferido aqui...'
                    />
                </label>
                <ul className={styles.errors}>
                    {errors.map(error => (
                        <li key={error.id}>{error.message}</li>    
                    ))}
                </ul>
                <br/>
                <button type='submit' className={styles.button}>ENVIAR</button>
            </form>
        </div>

    )

}

export default Form