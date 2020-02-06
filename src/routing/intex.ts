import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {CounterScreen} from "../screens/Counter";
import {HomeScreen} from "../screens/Home";
import {ImagePickerScreen} from "../screens/ImagePicker";
import {SwiperScreen} from "../screens/Swiper";
import {AnimationScreen} from "../screens/animation";
import {ImageScreen} from "../screens/image";

let RootStack = createStackNavigator({
    Home: HomeScreen,
    Counter: CounterScreen,
    ImagePicker: ImagePickerScreen,
    Swiper: SwiperScreen,
    // Animation: AnimationScreen,
    Image: ImageScreen,
});

export let AppRouting = createAppContainer(RootStack);