import React from 'react';
import { View, Image } from 'react-native';

const footer = (props) => {

	return (
		<View style={props.footer}>
			<Image style={props.icon} source={require('../assets/Youtube icon.png')} onClick={() => props.link('youtube')} />
			<Image style={props.icon} source={require('../assets/facebook icon.png')} onClick={() => props.link('facebook')} />
			<Image style={props.icon} source={require('../assets/insta icon inverted.png')} onClick={() => props.link('insta')} />
		</View>
	);
}

export default footer;