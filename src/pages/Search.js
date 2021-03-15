import  SearchIcon from '@material-ui/icons/Search'
import  MicIcon from '@material-ui/icons/Mic'
import React from 'react'
import "./search.css"
import { Button } from "@material-ui/core";
import {useState} from "react"
import { useHistory } from 'react-router-dom';
import { actionTypes } from './reducer';
import { useStateValue } from './stateprovider';



function Search({hideButton= false}) {
    const [input, setInput] = useState('')
    const history=useHistory()
    const [state,dispatch]= useStateValue()
    const search =(e) => {

        e.preventDefault()
        console.log(input)
   
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
     history.push('/search')
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/ >
                    <input value={input} onChange={e=> setInput(e.target.value)}/>
                    <MicIcon />
            </div>
            {!hideButton ?  (
                 <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
            ) : ( 
                 <div className="search__buttons">
          <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
          <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
        </div>
            )}
        </form>
    )
}

export default Search
