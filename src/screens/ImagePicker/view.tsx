import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image, ScrollView} from "react-native";
import {Camera} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import {styles} from './styles';
import {DefaultLoader} from "./DefaultLloader";
import {DefaultImage} from "./DefaultImage";
import {DefaultPicture} from "./DefaultPicture";
import {DefaultGallery} from "./DefaultGallery";

export type Asset = {
    id: string;
    uri: string;
    height: number;
    width: number;
    albumId: string;
    creationTime: number;
    duration: number;
    filename: string;
    mediaType: "photo" | any
    modificationTime: number;
}

// export const ImagePickerScreen = props => {
//     const [hasPermission, setHasPermission] = useState(null);
//     const [type, setType] = useState(Camera.Constants.Type.back);
//
//     useEffect(() => {
//         (async () => {
//             const { status } = await Camera.requestPermissionsAsync();
//             setHasPermission(status === 'granted');
//         })();
//     }, []);
//
//     if (hasPermission === null) {
//         return <View />;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }
//     return (
//         <View style={{ flex: 1 }}>
//             <Camera style={{ flex: 1 }} type={type}>
//                 <View
//                     style={{
//                         flex: 1,
//                         backgroundColor: 'transparent',
//                         flexDirection: 'row',
//                     }}>
//                     <TouchableOpacity
//                         style={{
//                             flex: 0.1,
//                             alignSelf: 'flex-end',
//                             alignItems: 'center',
//                         }}
//                         onPress={() => {
//                             setType(
//                                 type === Camera.Constants.Type.back
//                                     ? Camera.Constants.Type.front
//                                     : Camera.Constants.Type.back
//                             );
//                         }}>
//                         <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//                     </TouchableOpacity>
//                 </View>
//             </Camera>
//         </View>
//     );
// };
export const ImagePickerScreenView = props => {
    const [hasPermission, setHasPermission] = useState(null);
    const [assets, setAssets] = useState<Asset[]>([]);

    const Loader = DefaultLoader;
    const Picture = DefaultPicture;
    const Gallery = DefaultGallery;

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const { assets } = await MediaLibrary.getAssetsAsync({ first: 30});
            setAssets(assets);
        })();
    });


    const renderAlbums = useCallback(() => {
        return assets.map((asset, index) => (
            <View style={styles.asset} key={asset.id}>
                <Image style={styles.assetPicture} source={{uri: asset.uri}} />
            </View>
        ))
    }, []);

    return (
        <ScrollView style={styles.containerScroll}>
            <View style={styles.container}>
                {renderAlbums()}
            </View>
        </ScrollView>
    );
};