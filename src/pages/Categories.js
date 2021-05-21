import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Grid from '../components/Grid'

export default function Categories() {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://cms-ds.herokuapp.com/api/cat',
            );

            setCat(result.data);
        };

        fetchData();
    }, []);

    return (
        <div className="w-screen h-screen justify-center bg-gray-100">
            <Grid dataCategories={cat} />
        </div>
    )
}