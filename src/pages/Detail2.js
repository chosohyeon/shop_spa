import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = ({ list }) => {

    const { num } = useParams();
    const match = list.find(it => String(it.id) == num);

    const liStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        background: '#ddd',
        margin: '0 5px'
    }

    return (
        <>
            <img src={match.img_link} onError={e => e.target.src = process.env.PUBLIC_URL + '/assets/images/main_m01.jpg'} alt="" />
            <li>{match.name}</li>
            <li>{match.description.substring(0, 30)}...</li>
            <li>{match.price}</li>
            <ul>
                {
                    match.color.map(color => <li style={{ ...liStyle, background: color.hex_value }}>color</li>)
                }
            </ul>
        </>

    )
}

export default Detail