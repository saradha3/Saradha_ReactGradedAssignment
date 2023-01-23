import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col pl-1'>
			<h5 className='text-white'>{props.heading}</h5>
		</div>
	);
};

export default MovieListHeading;
