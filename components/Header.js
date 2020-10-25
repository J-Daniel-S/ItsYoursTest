import React from 'react';
import { Text, View } from 'react-native';

const header = (props) => {

	return (
		<View style={props.header}>
			<Text style={props.text}>It be yours!</Text>
		</View>
	);
}

export default header;