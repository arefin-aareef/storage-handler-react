import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 66;
    const totalMulti = multiply(first, second);

    return (
        <div>
            <h1>All Shoes</h1>
            <p>Total Multiply: {totalMulti}</p>

        </div>
    );
};

export default Shoes;