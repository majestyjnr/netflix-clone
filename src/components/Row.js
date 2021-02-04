import React, {useState, useEffect} from 'react'

const Row = ({title, fetchURL}) => {
    const [movies,setMovies] = useState([])    

    useEffect(() => {
        // If [], run once when the row loads, and don't run again
    }, [])

    return (
        <div>
            <h2>{title}</h2>

            {/*Containers -> Posters*/}
        </div>
    )
}

export default Row