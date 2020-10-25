import React from 'react';
import { View, Button, Text } from 'react-native';

const home = (props) => {

	const margin = { margin: '5vh' }

	const color = "#A9A9A9";

	return (
		<View style={props.container}>
			<View
				style={margin}

			>
				<Button
					onPress={() => props.link("audio")}
					title="Audio testimonies"
					color={color}
				/>
			</View>
			<View style={margin}>
				<Button
					onPress={() => props.link("video")}
					title="Video testimonies"
					color={color}
				/>
			</View>
			<View style={margin}>
				<Button
					onPress={() => props.link("record")}
					title="Record testimony"
					color={color}
				/>
			</View>
			<View style={margin}>
				<Button
					onPress={() => props.link("events")}
					title="Events and calendar"
					color={color}
				/>
			</View>
			<View style={margin}>
				<Button
					onPress={() => props.link("donate")}
					title="Donate"
					color={color}
				/>
			</View>
			<View
				onClick={() => console.log('clicked')}
				style={{
					backgroundColor: '#DCDCDC',
					borderRadius: '32%',
					height: '7vh',
					width: '75vw',
					borderColor: 'white',
					border: '3px solid',
					justifyContent: 'center',
					alignContent: 'center',
					alignItems: 'center',
					margin: 'auto'
				}}
			>
				<Text style={{ color: 'white' }}>This is also clickable</Text>
			</View>
		</View>
	);
}

export default home;