import React from 'react';
import {ScrollView, View} from "react-native";

import {styles} from './styles';

export type DefaultGalleryViewProps = {

}

export const DefaultPictureView: React.FC<DefaultGalleryViewProps> = props => {
    return (
        <ScrollView style={styles.containerScroll}>
            <View style={styles.container}>

            </View>
        </ScrollView>
    );
};