import React, { useState } from 'react';
import { View, Button, Image, Text } from 'react-native';

const record = (props) => {
	const [recording, setRecording] = useState(false);

	const color = { color: 'white' };
	let buttonText;

	if (recording) {
		buttonText = "STOP"
	} else {
		buttonText = "RECORD"
	}

	const toggleRecord = () => {
		if (recording) {
			setRecording(false);
		} else if (!recording) {
			setRecording(true);
		}
	}

	let button = (
		<Button
			onPress={() => toggleRecord()}
			title={buttonText}
			color={color}
		/>
	);

	return (
		<View style={props.container}>
			<View style={props.container}>
				<View style={{ flex: '5' }}>

				</View>
				<View style={props.smallContainer}>
					<View style={props.pill} onClick={() => console.log('record video')}>
						<Text style={color}><strong>Record Video</strong></Text>
					</View>
				</View>
				<br></br>
				<View style={props.smallContainer}>
					<View style={props.pill} onClick={() => props.location('audio')}>
						<Text style={color}><strong>Record Audio</strong></Text>
					</View>
				</View>
				<View style={{ flex: '2'}}></View>
			</View>
		</View>
	);
}

export default record;