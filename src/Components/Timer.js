import React, { useEffect, useState } from 'react'

const Timer = (props) => {
    let [time, setTime] = useState(5);
    useEffect(() => {
        var decrement = () => {
            setTime(--time);
            if (time <= 0) {
                clearInterval(interval);
                props.update()
            }
        }
        var interval = setInterval(decrement, 1000)
    }, [])
    return (
        <p className='h4'>Timer : {time}</p>
    )
}

export default Timer
