import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';

const home = (props) => {
	const color = { color: 'white' };

	return (
		<View style={props.container}>
			<View style={props.topContainer}>
				<View style={props.pill} onClick={() => props.link('about')}>
					<Text style={color}><strong>About iY</strong></Text>
				</View>
			</View>
			<View style={props.topContainer}>
				<View style={props.pill} onClick={() => props.link('audio')}>
					<Text style={color}><strong>Audio testimonies</strong></Text>
				</View>
			</View>
			<View style={props.topContainer}>
				<View style={props.pill} onClick={() => props.link('video')}>
					<Text style={color}><strong>Video testimonies</strong></Text>
				</View>
			</View>
			<View style={props.topContainer}>
				<View style={props.pill} onClick={() => props.link('donate')}>
					<Text style={color}><strong>Donate</strong></Text>
				</View>
			</View>
			<View style={props.topContainer}>
				<View style={props.pill} onClick={() => props.link('shop')}>
					<Text style={color}><strong>Wear it: merch</strong></Text>
				</View>
			</View>
			<View style={props.smallContainer}>
				<View style={props.pill} onClick={() => props.location('record')}>
					<Text style={color}><strong>Record testimony</strong></Text>
				</View>
			</View>
		</View >
	);
}

export default home;