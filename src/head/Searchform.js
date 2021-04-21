import React from 'react'

export default function Searchform() {
    return (
        <div className="search" >
            <form className="searchform">
                <input type="text" placeholder="Search for anything" />
                <button title="Click to search" type="submit"> search </button>
            </form>
        </div>
    )
}
