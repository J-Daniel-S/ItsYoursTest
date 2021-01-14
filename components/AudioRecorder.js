import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import AudioRecorderPlayer, {
	AVEncoderAudioQualityIOSType,
	AVEncodingOption,
	AudioEncoderAndroidType,
	AudioSet,
	AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';

const audioRecorder = (props) => {
	const [recording, setRecording] = useState(false);
	const [audioPresent, setAudioPresent] = useState(false);

	const [isLogging, setIsLogging] = useState(false);
	const [recordSecs, setRecordSecs] = useState(0);
	const [recordTime, setRecordTime] = useState('00:00:00');
	const [currentPositionSec, setCurrentPositionSec] = useState(0);
	const [currentDurationSec, setCurrentDurationSec] = useState(0);
	const [playTime, setPlayTime] = useState('00:00:00');
	const [duration, setDuration] = useState('00:00:00');

	const audioRecorderPlayer = new AudioRecorderPlayer();

	const buttonContainer = {
		margin: '8vh 0 0 0',
		backgroundColor: '#404040',
		alignContent: 'space-around',
		justifyContent: 'flex-end',
		height: '85vh'
	}

	let buttonState;

	if (!recording) {
		buttonState = <Icon
			name="circle"
			type="font-awesome"
			color="white"
		/>;
	} else {
		buttonState = <Icon
			name="square"
			type="font-awesome"
			color="white"
		/>
	}

	const toggleRecording = () => {
		if (!recording) {
			setRecording(true);
		} else if (recording) {
			setRecording(false);
		}
	}

	const onStartRecord = asynch () => {
		
		const path = 'hello.m4a';
		const audioSet = {
			AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
			AudioSourceAndroid: AudioSourceAndroidType.MIC,
			AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
			AVNumberOfChannelsKeyIOS: 2,
			AVFormatIDKeyIOS: AVEncodingOption.aac,
		};

		console.log('audioset', audioSet);
		const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
		audioRecoderPlayer.addRecordBackListener((e) => {
			setRecordSecs(e.current_position);
			setRecordTime(audioRecoderPlayer.mmsss(
				Math.floor(e.current_position)
			))
		} );

	}

	const color = { color: 'white' };
	const time = { color: 'white', margin: 'auto', fontSize: 24 }

	return (
		<View style={props.container}>
			<View style={buttonContainer}>
				<View style={{ flex: '2' }}>
				</View>
				<View style={{ flex: '2', alignContent: 'flex-end' }}>
					<View style={props.smallContainer}>
						<View style={props.pill} onClick={() => toggleRecording()}>
							<Text style={color}><strong> {buttonState} </strong></Text>
						</View>
					</View>
				</View>
				<View style={{ flex: '2' }}>
					<Text style={time}>00:00:00 s</Text>
				</View>
				<View style={{ flex: '2' }}>
					<Text style={color}><strong> play section </strong></Text>
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