import React, { useState } from 'react';
import { View, Text } from 'react-native';

const audioRecorder = (props) => {
	const [recording, setRecording] = useState(false);
	const [audioPresent, setAudioPresent] = useState(false);

	let buttonState;

	if (!recording) {
		buttonState = 'Start Recording';
	} else {
		buttonState = 'Stop Recording'
	}

	const toggleRecording = () => {
		if (!recording) {
			setRecording(true);
		} else if (recording) {
			setRecording(false);
		}
	}

	const color = { color: 'white' };
	const time = { color: 'white', margin: 'auto', fontSize: 24 }

	return (
		<View style={props.container}>
			<View style={props.container}>
				<View style={{ flex: '3' }}>
					<Text style={time}>00:00:00 s</Text>
				</View>
				<View style={props.smallContainer}>
					<View style={props.pill} onClick={() => toggleRecording()}>
						<Text style={color}><strong> {buttonState} </strong></Text>
					</View>
				</View>
				{audioPresent && (<View>
					<br />
					<View style={props.smallContainer}>
						<View style={props.pill} onClick={() => console.log('playing testimony')}>
							<Text style={color}><strong> Play testimony </strong></Text>
						</View>
					</View>
					<br />
					<View style={props.smallContainer}>
						<View style={props.pill} onClick={() => console.log('uploading....')}>
							<Text style={color}><strong> Upload testimony </strong></Text>
						</View>
					</View>
				</View>
				)}
				<View style={{ flex: '2' }}></View>
			</View>
		</View>
	);
}

export default audioRecorder;