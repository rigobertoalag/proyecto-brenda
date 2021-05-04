import React from 'react'

import {items} from '../statics/items.json'
import Grid from '../components/Grid'

export default function Items(){
    return(
        <main>
            <Grid dataItems={items} isItem='1'/>
        </main>
    )
}