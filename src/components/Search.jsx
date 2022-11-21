import React, { useState,useEffect } from 'react'
import SearchBar from './SearchBar'
import ListPage from './ListPage'
import { getUsers } from '../api/axios'
const Search = () => {
    const [state,setState]=useState([])
    const[searchResults,setSearchResults]=useState([])

    useEffect(()=>{
        getUsers().then(json=>{
            setState(json);
            return json
        }).then(json=>{
            setSearchResults(json)
        })
    },[])
  return (
    <>
      <SearchBar state={state} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )
}

export default Search