import React, { useEffect, useState } from 'react'
import axios from "axios"

function SearchBar() {
    const [display, setDisplay] = useState("")
    const [look, setLook] = useState("")


    const changeHandler = e => setDisplay(e.target.value)

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            fetchHandler()

        }
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${display}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`


    const fetchHandler = async () => {
        await axios.get(url)
            .then((res) => { setLook(res.data) });

        console.log(look)
    }

    return (
        <div className='search'>
            <div>
                <input className='search-bar' type="text" placeholder='enter a city name' onChange={changeHandler} onKeyDown={handleKeyDown} />
            </div>

            {look && <div className='weather-card'>

                <h1>{look.name}</h1>


                {look ? <h2>  {Math.round(look.main.temp) } °C </h2> : null}

                <h3>{look ? look.weather[0].description : null}</h3>


            </div>}
        </div>
    )
}

export default SearchBar