import React from 'react';
import {Button, Text, View} from 'react-native';
import CardStack, { Card } from '@starodubenko/react-native-card-stack-swiper';
import {styles} from './styles';

export class SwiperScreen extends React.Component {
    swiper = null;

    swipeHandler(data) {
    };

    render() {
        return (
            <View style={styles.container}>
                <CardStack style={styles.cardStackContainer}
                           contentStyle={styles.cardStackContent}
                           ref={swiper => { this.swiper = swiper }}
                           disableTopSwipe
                           disableBottomSwipe
                           verticalSwipe={false}
                           onSwipeStart={this.swipeHandler}
                           outputRotationRange={['-25deg', '0deg', '25deg']}
                           disableArcX
                >
                    <Card style={[styles.card, styles.card1]}><Text style={styles.label}>A</Text></Card>
                    <Card style={[styles.card, styles.card2]}><Text style={styles.label}>B</Text></Card>
                    <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
                </CardStack>
            </View>
        )
    }
}