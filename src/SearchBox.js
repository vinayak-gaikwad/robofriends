import React from 'react';




const SearchBox = ({searchfield,searchchange}) => {
	return(
		<div className='pd2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='seaarch robots' 
			onChange={searchchange} />

		</div>


	);
}
export default SearchBox;