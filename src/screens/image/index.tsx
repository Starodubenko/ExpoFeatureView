import React, {useEffect, useState} from 'react';
import {Image, ScrollView, View} from "react-native";
import {detectFaces} from "face-recognition-react-native";

export const ImageScreen = props => {
    const [imageDimensions, setImageDimensions] = useState({});
    const [faceCoords, setFaceCoords] = useState({});

    useEffect(() => {
        Image.getSize(
            'https://cs9.pikabu.ru/post_img/big/2016/12/27/7/1482836805268173178.jpg',
            (width, height) => {
                console.log({width, height});
                setImageDimensions({width, height})
            },
            () => {}
        );
    }, []);

    useEffect(() => {
        detectFaces('https://cs9.pikabu.ru/post_img/big/2016/12/27/7/1482836805268173178.jpg')
            .then(result => setFaceCoords,
                    e => {}
            );
    }, []);

    console.log(faceCoords);

    return (
        <View style={{
            flexGrow: 1,
            overflow: 'hidden'
        }}>
            <Image source={{uri: 'https://cs9.pikabu.ru/post_img/big/2016/12/27/7/1482836805268173178.jpg'}}
                   style={[imageDimensions, {
                       transform: [
                           {translateX: -100}
                       ]
                   }]}
            />
        </View>
    )
};