import React, {useMemo, useState} from 'react';


const summator = (n) => {
    console.log('start');
    let sum = n;
    for (let i = 0; i < 1000; i++) {
        sum += 1;
    }
    for (let i = 0; i < 4000000000; i++) {


    }
    console.log('finish');
    return sum
}
const UseMemoComponent = () => {

    const [n, setN] = useState(5);
    const [count, setCount] = useState(0);

    const result = useMemo(() => summator(n), [n]);

    return (
        <div>
            <div>Result: {result}</div>
            <div>Count: {count}</div>
            <button onClick={() => setN(prevState => ++prevState)}>incM</button>
            <button onClick={() => setCount(prevState => ++prevState)}>incCount</button>
        </div>
    );
};

export {UseMemoComponent};