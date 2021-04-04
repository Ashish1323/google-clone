import { Link } from '@material-ui/core'
import React from 'react'
import Search from './Search'
import './searchPage.css'
import { useStateValue } from './stateprovider'
import useGoogleSearch from './useGoogleSearch'

import SearchIcon from "@material-ui/icons/Search";

import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";


function SearchPage() {
      //const [{ term }, dispatch] = useStateValue();
    const [state, dispatch] = useStateValue()
    const {data} = useGoogleSearch(state.term)
    console.log(data)
    return (
      
        <div className="searchPage">
        <Link to="/">
          <img
            className="searchPage__logo "
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__header">
          <div class="searchPage__headerBody">
          <Search hideButton />
          <div class="searchPage__options">
            <div class="searchPage__optionsLeft">
              <div class="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div class="searchPage__option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div class="searchPage__option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div class="searchPage__option">
                <RoomIcon />
                <Link to="/all">maps</Link>
              </div>
              <div class="searchPage__option">
                <MoreVertIcon />
                <Link to="/all">more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {state.term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {state.term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink} ∆
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div> 
    )
}

export default SearchPage
