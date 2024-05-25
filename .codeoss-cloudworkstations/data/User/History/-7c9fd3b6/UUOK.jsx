import { CiTrash } from "react-icons/ci";
import { collection, doc, deleteDoc} from 'firebase/firestore';
import db from '../config/config'; 

import "./styles/MovieCard.css"

function MovieCard(props) {

    console.log(props)
    const deletePelicula = async (id) => {
        console.log(id)
        if (confirm("Segur que vols eliminar aquesta pelicula?")) {
            try {
                const peliculesRef = collection(db, 'pelicules')
                await deleteDoc(doc(peliculesRef, id));
                console.log("Esborrat pelicula");
                location.reload();
            } catch (error) {
                console.error('Error: ', error);
            }
        }        
    }

    return (
        <>
            <figure className="movie">
                <div className="movie__hero">
                    <img src={props.image} className="movie__img" />
                </div>
                <div className="movie__content">
                    <div className="movie__title">
                        <h1 className="heading__primary">{props.title}</h1>
                        <div className="movie__tag movie__tag--1">{props.rate}/5</div>
                    </div>
                    <p className="movie__description">{props.description}</p>
                    <div className="movie__details">
                        <p className="movie__detail">{props.direction}</p>
                        <p className="movie__detail">{props.duration}min</p>
                    </div>
                </div>
                <button className='delete' onClick={() => deletePelicula(props.id)}><CiTrash size={32} /></button>
            </figure>
        </>
    );
}

export default MovieCard