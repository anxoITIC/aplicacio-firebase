import React from 'react'
import db from "../config/config"
import { collection, doc, setDoc } from "firebase/firestore"; 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiCircleChevLeft } from "react-icons/ci";


function MoviesAdd(props) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        direction: '',
        image: '',
        rate: '',
        year: '',
        duration: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const afegirPelicula = async (e) => {
        e.preventDefault();

        try {
            const peliculesRef = collection(db, 'pelicules')
            await setDoc(doc(peliculesRef), formData);
            console.log("Afegit pelicula");
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    return(
        <>
            <Link to="/"><CiCircleChevLeft size={50}/></Link>
            <form onSubmit={afegirPelicula}>
                <label htmlFor="title">Títol:</label><br />
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /><br />

                <label htmlFor="description">Descripció:</label><br />
                <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required /><br />

                <label htmlFor="direction">Direcció:</label><br />
                <input type="text" id="direction" name="direction" value={formData.direction} onChange={handleChange} required /><br />

                <label htmlFor="image">Imatge (URL):</label><br />
                <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required /><br />
                
                <label htmlFor="rate">Nota (1/5):</label><br />
                <input type="text" id="rate" name="rate" value={formData.rate} onChange={handleChange} required /><br />

                <label htmlFor="year">Any:</label><br />
                <input type="text" id="year" name="year" value={formData.year} onChange={handleChange} required /><br />

                <label htmlFor="duration">Durada (min):</label><br />
                <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} required /><br />

                <input type="submit" />
            </form>
        </>
    )
}

export default addMovie