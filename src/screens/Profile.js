import React from 'react';
import { View } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';

import ProfilePicture from '../components/profile/pic';

export default function ({ navigation }) {
	return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text>This is the Profile tab</Text>
				<ProfilePicture/>
			</View>
		</Layout>
	);
}
