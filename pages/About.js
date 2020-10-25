import React from 'react';
import { Text, View, Button } from 'react-native';

const about = (props) => {

	return (
		<View style={props.container}>
			<Text>About!</Text>
			<Button 
				onPress={() => props.set()}
				title="change location"
				color="#841584"
			/>
		</View>
	);
}

export default about;