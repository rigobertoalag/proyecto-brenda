import React from 'react'

import { items } from '../statics/items.json'
import Grid from '../components/Grid'

export default function Cart(){
    return(
        <main>
            <Grid data={items}/>
        </main>
    )
}