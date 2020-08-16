import React from "react";

function Search ({ search, handleChange, handleSubmit }) {
	return (
		<div className="search">
			<form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={search} 
                    onChange={handleChange} 
                    placeholder="Search a Dish!" 
                />
			</form>
		</div>
	);
}

export default Search;