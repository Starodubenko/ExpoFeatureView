import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Animated, Dimensions, Text, View} from 'react-native';
import {styles} from './styles';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

const {width, height} = Dimensions.get('window');

const screenWidth = width * 2;

export const AnimationScreen = () => {
    const [shiftValue, setShiftValue] = useState();
    const [rotationZ, setRotationZ] = useState();
    const shiftXAnimated = useMemo(() => new Animated.Value(0), []);
    const shiftValueAnimated = useMemo(() => new Animated.Value(screenWidth/2), []);
    const rotationZAnimated = useMemo(() => shiftValueAnimated.interpolate({
        inputRange: [0, screenWidth/2, screenWidth],
        outputRange: ['-0.4rad', '0rad', '0.4rad'],
    }), [screenWidth]);

    useEffect(() => {
        shiftValueAnimated.addListener(({value}) => setShiftValue(value));
        rotationZAnimated.addListener(({value}) => setRotationZ(value));
    }, [shiftValueAnimated]);

    const onSliderValuesChange = useCallback((value) => {
        shiftValueAnimated.setValue(value[0]);
        shiftXAnimated.setValue(value[0] - screenWidth/2);
    }, [screenWidth]);

    return (
        <View style={styles.container}>
            <View style={styles.animatedObjectContainer}>
                <Animated.View style={[styles.animatedObject, {
                    transform: [
                            {rotateZ: rotationZAnimated},
                        ],
                    left: shiftXAnimated
                }]} />
            </View>
            <View style={styles.thumbContainer}>
                <MultiSlider onValuesChange={onSliderValuesChange} min={0} max={screenWidth} values={[(screenWidth)/2]}/>
                <Text>{shiftValue}</Text>
                <Text>{rotationZ}</Text>
            </View>

        </View>
    )
}