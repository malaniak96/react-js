import React from 'react';
import {Simpson} from "./Simpson";

const Simpsons = () => {

    const simpsons = [
        { id:1, name: 'Homer', age: 40, relation: 'Father', image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png' },
        { id:2, name: 'Marge', age: 38, relation: 'Mother', image: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'},
        { id:3, name: 'Bart', age: 10, relation: 'Son', image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png' },
        { id:4, name: 'Lisa', age: 8, relation: 'Daughter', image: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png' },
        { id:5, name: 'Maggie', age: 1, relation: 'Baby', image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
    ];

    return (
        <div>
            {simpsons.map(value => <Simpson key={value.id} simpson={value}/>)}
        </div>
    );
};

export default Simpsons;