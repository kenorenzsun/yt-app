import React, {useState} from "react";

const SearchBar = ({onSearchFormSubmit}) => {
    const [term,setTerm] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        onSearchFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input value={term} onChange={(event) => setTerm(event.target.value)}  type="text"/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar