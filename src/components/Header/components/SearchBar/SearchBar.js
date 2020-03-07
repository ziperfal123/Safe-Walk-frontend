import React, {useEffect, useState} from 'react'
import './searchBar.scss'

const SearchBar = () => {
    const [searchValue , setSearchValue] = useState('')

    useEffect(() => {
    }, [searchValue])

    function handleInputChange(e) {
        setSearchValue(e.target.value)
    }

    return (
        <div className={'search-bar-container'}>
            <input
                value={searchValue}
                onChange={handleInputChange}    //TODO:: async search needs to be performed here
                placeholder={'Search'}
            />
        </div>
    )
}

export default SearchBar