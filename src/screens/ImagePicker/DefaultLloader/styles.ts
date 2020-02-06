import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
    },
    container: {
        backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});