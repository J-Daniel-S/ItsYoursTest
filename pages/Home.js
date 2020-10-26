import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';

const home = (props) => {

	const color = { color: 'white' };

	return (
		<View style={props.container}>
			<View style={props.topContainer}>
				<View style={{ flex: 1 }}>
					<Image style={props.icon} source={require('../assets/menu icon.png')} onClick={() => props.location("menu")} />
				</View>
				<View style={props.pill} onClick={() => props.link('about')}>
					<Text style={color}><strong>Learn more about iY</strong></Text>
				</View>
			</View>
			<ScrollView style={props.text}>
				<Text style={color}>
					In 2016, the founder of iY had a dream of young Christians wearing a shirt labelled "it's your life." Two years later, after much prayer and thought,
					Jason Betts was encouraged by a friend to push forward in this vision. Following the dream, iY was formed as a Public Charity nonprofit organization in August of 2018.
				</Text>
				<br></br>
				<Text style={color}>
					iY is highly devoted to providing testimonies of God's greatness in a public way. iY is inclined to setup the sharing of testimonies at churches, concert venues,
					and other public forums. By sharing God's glory iY, is transforming the culture of Christianity to be more open. The shirt, "it's your life" is available to the
					consumer for a small donation, but is also available by sharing your story online!
				</Text>
				<br></br>
				<Text style={color}>
					“Since we have the same spirit of faith according to what has been written, “I believe, and so I spoke,” we also believe, and so we also speak” II Corinthians 4:13
				</Text>
			</ScrollView>
			<View style={props.smallContainer}>
				<View style={props.pill} onClick={() => props.link('record')}>
					<Text style={color}><strong>Testify</strong></Text>
				</View>
			</View>
		</View>
	);
}

export default home;