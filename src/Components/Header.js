import React from 'react'
import { useState } from 'react'

export const Header = (props) => {
    const [num, setNum] = useState(props.initNum);

    return (
        <div>
            <h1>The number is: {num}</h1>
            <button onClick={
                function() {
                    setNum(num + 1);
                }
            }>add</button>
            <button onClick={
                function() {
                    setNum(num - 1);
                }
            }>minus</button>
        </div>
    )
}

export default Header;