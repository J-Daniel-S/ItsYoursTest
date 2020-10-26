import React from 'react';
import { Text, View, Image } from 'react-native';

const header = (props) => {

	return (
		<View style={props.header}>
			<Image style={props.image} source={require('../assets/ItsYoursInverse.png')} onClick={() => console.log('image clicked')} />
			<Image style={props.truth} source={require('../assets/TruthBeTold.png')} onClick={() => console.log('image clicked')} />
		</View>
	);
}

export default header;