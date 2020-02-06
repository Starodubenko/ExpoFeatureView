import React from 'react';
import {Button, View} from "react-native";

export const HomeScreen = props => {
    return (
        <View>
            <Button title={'Counter'} onPress={() => props.navigation.navigate('Counter')}/>
            <Button title={'Custom image picker'} onPress={() => props.navigation.navigate('ImagePicker')}/>
            <Button title={'Swiper'} onPress={() => props.navigation.navigate('Swiper')}/>
            <Button title={'Google/Facebook auth'} onPress={() => {}}/>
            <Button title={'Photo/Video'} onPress={() => {}}/>
            <Button title={'Push notifications/Custom android/ios'} onPress={() => {}}/>
            <Button title={'Animations'} onPress={props.navigation.navigate('Animation')}/>
            <Button title={'card/google payment'} onPress={() => {}}/>
            <Button title={'sockets'} onPress={() => {}}/>
            <Button title={'map navigation'} onPress={() => {}}/>
            <Button title={'chatting'} onPress={() => {}}/>
            <Button title={'broadcasting'} onPress={() => {}}/>
            <Button title={'charts'} onPress={() => {}}/>
            <Button title={'image'} onPress={props.navigation.navigate('Image')}/>
        </View>
    )
};