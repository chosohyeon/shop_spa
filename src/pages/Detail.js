import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({ list }) => {
    const { num } = useParams();
    const match = list.find(it => String(it.id) === num);

    return (
        <ul>
            <li>{match.id}</li>
            <li>{match.con}</li>
            <li>{match.des}</li>
        </ul>
    )
}

export default Detail