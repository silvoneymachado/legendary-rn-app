import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { editScreenStyles } from './EditScreenInfo.styles';

interface IProps {
	path: string;
}

export default function EditScreenInfo({ path }: IProps) {
	return (
		<View>
			<View style={editScreenStyles.getStartedContainer}>
				<Text style={editScreenStyles.getStartedText} lightColor={Colors.light.text} darkColor={Colors.dark.text}>
					Open up the code for this screen:
				</Text>

				<View
					style={[editScreenStyles.codeHighlightContainer, editScreenStyles.homeScreenFilename]}
					darkColor={Colors.light.text}
					lightColor={Colors.dark.text}
				>
					<MonoText>{path}</MonoText>
				</View>

				<Text style={editScreenStyles.getStartedText} lightColor={Colors.light.text} darkColor={Colors.dark.text}>
					Change any of the text, save the file, and your app will automatically update.
				</Text>
			</View>

			<View style={editScreenStyles.helpContainer}>
				<TouchableOpacity onPress={handleHelpPress} style={editScreenStyles.helpLink}>
					<Text style={editScreenStyles.helpLinkText} lightColor={Colors.light.tint}>
						Tap here if your app doesn't automatically update after making changes
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync('https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet');
}
