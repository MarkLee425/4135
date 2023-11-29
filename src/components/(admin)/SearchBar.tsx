import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <input id="search" placeholder='Search' type="text" size={80} className='px-1 py-1 rounded-md align-middle item-center focus:outline-none' />
    </div>
  )
}

export default SearchBar