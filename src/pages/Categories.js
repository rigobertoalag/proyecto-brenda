import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Grid from '../components/Grid'

export default function Categories() {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:8000/api/cat',
            );

            setCat(result.data);
        };

        fetchData();
    }, []);

    return (
        <main>
            <Grid dataCategories={cat} />
        </main>
    )
}