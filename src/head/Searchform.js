import React from 'react'

export default function Searchform() {
    return (
        <div className="search" >
            <form className="searchform">
                <input className="input-box" type="text" placeholder="Search for anything" />
                <button title="Click to search" type="submit"> search </button>
            </form>
        </div>
    )
}
