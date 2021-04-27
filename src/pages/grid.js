import React from 'react';
const styles = {
about: {
	padding: '50px',
	textAlign: 'center',
	backgroundColor: '#474e5d',
	color: 'white',
}
};

export default class Grid extends React.Component {
render() {
	return <div style={styles.about}>
	<h1>About Us Page</h1>
	
	<p>Some text about who we are and what we do.</p>
</div>;
}
}
