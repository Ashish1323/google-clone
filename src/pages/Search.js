import  SearchIcon from '@material-ui/icons/Search'
import  MicIcon from '@material-ui/icons/Mic'
import React from 'react'
import "./search.css"
import { Button } from "@material-ui/core";
import {useState} from "react"


function Search() {
    const [input, setInput] = useState('')

    const search =(e) => {
        e.preventDefault()
        console.log(input)
    }
    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/ >
                    <input value={input} onChange={e=> setInput(e.target.value)}/>
                    <MicIcon />
            </div>
             <div className="search__buttons">
          <Button onClick={search} variant="outlined">Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
        </div>
    )
}

export default Search
