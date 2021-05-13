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
        <div className="w-screen h-screen flex justify-center px-2 bg-gray-100">
            <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-5 mr-2 ml-2">
                <Grid dataCategories={cat} />
            </div>
        </div>
    )
}