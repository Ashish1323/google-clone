import { Link } from '@material-ui/core'
import React from 'react'
import Search from './Search'
import './searchPage.css'
import { useStateValue } from './stateprovider'
import useGoogleSearch from './useGoogleSearch'


function SearchPage() {
    const [state, dispatch] = useStateValue()
    const {data} = useGoogleSearch(state.term)
    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
         <div class="searchPage__headerBody">
          <Search hideButton />
          </div>
            </div>
        <div className="searchPage__results">

        </div>
        </div>
    )
}

export default SearchPage
