import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { CiCircleChevLeft } from "react-icons/ci";
import MovieCard from '../components/MovieCard';

import db from '../config/config'; 

function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const peliculesRef = collection(db, 'pelicules');
            const q = query(peliculesRef);
            try {
                const querySnapshot = await getDocs(q);
                const movies = [];
                querySnapshot.forEach((doc) => {
                    movies.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setMovies(movies);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        getMovies();
    }, []); 

    


    return (
        <>
            <Link to="/"><CiCircleChevLeft size={50}/></Link>
            {movies.map((movie, index) => (
                <MovieCard 
                key={index}
                id={movie.id}
                title={movie.title}
                description={movie.description}
                image={movie.image}
                direction={movie.direction}
                rate={movie.rate}
                year={movie.year}
                duration={movie.duration}
                />
            ))}
        </>
      )
}

export default MoviesList;