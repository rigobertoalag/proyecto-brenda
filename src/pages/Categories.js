import React from 'react'

import { category } from '../statics/categories.json'
import Grid from '../components/Grid'

export default function Categories() {
    return (
        <main>
            <Grid data={category} />
        </main>
    )
}