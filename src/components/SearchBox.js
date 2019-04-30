import React from 'react';
import '../containers/app.css'

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input type="search" placeholder='search robot name' className='pa3 f5 light-red bb b--light-red bw2 code' onChange={searchChange}/>

        </div>
        
    )
}

export default SearchBox;