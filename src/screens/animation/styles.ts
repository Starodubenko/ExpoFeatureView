import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    animatedObjectContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'gray',
    },

    animatedObject: {
        width: 400,
        height: 600,
        backgroundColor: 'red',
    },

    thumbContainer: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'silver',
        margin: 50,
    },

    touched: {
        borderWidth: 1,
        borderColor: 'black',
    }
});