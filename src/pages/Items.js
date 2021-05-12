import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    useParams
} from "react-router-dom";

import Grid from '../components/Grid'

export default function Items() {

    let { cat_id } = useParams();
    console.log('valor del useparams', cat_id);

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:8000/api/item/' + cat_id,
            );

            setItems(result.data);
        };

        fetchData();
    }, []);

    return (
        <main>
            <Grid dataItems={items} isItem='1' />
        </main>
    )
}