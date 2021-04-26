import React from 'react'

import { category } from '../statics/categories.json'

export default function Categories() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {
                category.map((c) => (
                    <div className="card" key={c.id}>
                        <img src={c.img} alt={c.name} style={{ width: "100%" }} />
                        <div className="container">
                            <h4><b>{c.name}</b></h4>
                            <p>{c.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}