import { useEffect } from "react"
import { useState } from "react"

export const Timer = (props) => {
    const [seconds, setSeconds] = useState(props.time)
        useEffect(() => {
            if (seconds != 0) {
                setTimeout(() => {
                    setSeconds(prev => prev - 1)
                }, 1000)
            } else {
                props.deleteItem(props.id, seconds)
            }     
        }, [seconds])
    
        return (
            <div>
                {seconds} 
            </div>
        )
}