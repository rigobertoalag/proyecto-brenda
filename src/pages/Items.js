import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    useParams
} from "react-router-dom";

import Grid from '../components/Grid'

export default function Items() {
    const { cat_id } = useParams();
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
        <div className="w-screen h-screen justify-center bg-gray-100">
            <Grid dataItems={items} isItem='1' />
        </div>
    )
}