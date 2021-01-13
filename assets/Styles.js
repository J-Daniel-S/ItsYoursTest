import { StyleSheet } from 'react-native';

export const styling = StyleSheet.create({
	container: {
		flex: 1,
		margin: '5vh 0 0 0',
		backgroundColor: '#404040',
		alignContent: 'space-around',
		justifyContent: 'flex-start',
		height: '85vh'
	},
	header: {
		backgroundColor: '#303030',
		height: '14vh',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-end'
	},
	footer: {
		backgroundColor: '#303030',
		margin: '0 0 5vh 0',
		height: '10vh',
		width: '100vw',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		bottom: 0,
		position: "absolute"
	},
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	text: {
		color: 'white',
		fontSize: 6
	},
	button: {
		margin: '1vh'
	},
	pillButton: {
		margin: 'auto 0',
		borderStyle: 'solid',
		borderColor: 'white',
		borderWidth: 1.5,
		borderRadius: 500,
		padding: '2vh',
		flex: 1,
		alignItems: 'center'
	},
	homeText: {
		flex: 4,
		padding: '0.5vh',
	},
	tinyLogo: {
		width: '12vh',
		height: '12vh',
		color: 'white',
	},
	tinyIcon: {
		width: '7vh',
		height: '7vh'
	},
	topContainer: {
		flex: 0.15,
		padding: 4,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		alignContent: 'center'
	},
	smallContainer: {
		flex: 0.35,
		padding: 4,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		alignContent: 'center'
	},
	truthBeTold: {
		height: '8vh',
		width: '50vw',
		color: 'white',
		resizeMode: 'center'
	}
});