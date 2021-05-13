import React from 'react'
import { FormControl, OutlinedInput, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'


const SearchBar = ({ search, setSearch }) => {

    const inputSearch = e => {
        const { value } = e.target
        setSearch(value)
    }

    return (
        <FormControl style={{width: '100%', marginRight: '20px'}}>
            <OutlinedInput placeholder="Search..." onChange={inputSearch} value={search}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
            />
        </FormControl>
    )
}

export default SearchBar