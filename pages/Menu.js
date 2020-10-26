import React from 'react';
import { View, Button, Image } from 'react-native';

const menu = (props) => {

	const color = "#383838";

	return (
		<View style={props.container}>
			<View style={{ flex: 1, padding: 10 }}>
				<Image style={props.icon} source={require('../assets/back image.png')} onClick={() => props.location("home")} />
			</View>
			<View style={{ flex: 6 }}>
				<View style={props.button}>
					<Button
						onPress={() => props.location("home")}
						title="Home"
						color={color}
					/>
				</View>
				<View style={props.button}>
					<Button
						onPress={() => props.link("audio")}
						title="Audio testimonies"
						color={color}
					/>
				</View>
				<View style={props.button}>
					<Button
						onPress={() => props.link("video")}
						title="Video testimonies"
						color={color}
					/>
				</View>
				<View style={props.button}>
					<Button
						onPress={() => props.link("record")}
						title="Record testimony"
						color={color}
					/>
				</View>
				<View style={props.button}>
					<Button
						onPress={() => props.link("events")}
						title="Events and calendar"
						color={color}
					/>
				</View>
				<View style={props.button}>
					<Button
						onPress={() => props.link("donate")}
						title="Donate"
						color={color}
					/>
				</View>
				<View style={props.button}>
					<Button
						onPress={() => props.link("shop")}
						title="Wear it: merch"
						color={color}
					/>
				</View>
			</View>
		</View>
	);
}

export default menu;