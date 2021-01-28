import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';

import {
    Background,
    BehindTrees,
    BigMountain,
    BigMountainTexture,
    Cliff,
    MountainFive,
    MountainFour,
    MountainOne,
    MountainThree,
    MountainTwo,
    Home,
    Window,
    TreeCliff,
    Trees,
    Sun,
    Clouds,
} from '../icons';
import { Switch } from '../components'


const { height, width } = Dimensions.get('window');

export const DayAndNight = () => {

    const posx = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(
            posx,
            {
                toValue: 1000,
                delay: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start();
    }, [])

    return (
        <>
            <View style={styles.bg}>
                <Background style={styles.bg} />
            </View>

            <View style={styles.switchButton}>
                <Switch></Switch>
            </View>

            <View style={styles.bigMountain}>
                <BigMountain />
            </View>
            <View style={styles.mountainTexture}>
                <BigMountainTexture />
            </View>
            <View style={styles.mountain1}>
                <MountainOne />
            </View>
            <View style={styles.mountain2}>
                <MountainTwo />
            </View>
            <View style={styles.mountain3}>
                <MountainThree />
            </View>
            <View style={styles.mountain4}>
                <MountainFour />
            </View>
            <View style={styles.mountain5}>
                <MountainFive />
            </View>
            <View style={styles.behindTrees}>
                <BehindTrees />
            </View>
            <View style={styles.cliff}>
                <Cliff />
            </View>
            <View style={styles.home}>
                <Home />
            </View>
            <View style={styles.window}>
                <Window />
            </View>
            <View style={styles.treeCliff}>
                <TreeCliff />
            </View>
            <View style={styles.tree}>
                <Trees />
            </View>
            <View style={styles.sun}>
                <Sun />
            </View>
            <Animated.View style={[styles.clouds, posx]}>
                <Clouds />
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    full: {
        flex: 1,
    },
    bg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    bigMountain: {
        position: 'absolute',
        width: width / 1.046,
        height: height / 3.47,
        zIndex: 0,
        top: height / 1.636,
        left: -8.56,
    },
    mountainTexture: {
        position: 'absolute',
        width: width / 2.4456,
        height: height / 5.576,
        left: width / 19,
        top: height / 1.64,
        zIndex: 0,
    },
    mountain1: {
        position: 'absolute',
        top: height / 1.339,
        width: width / 1.81,
        height: height / 7.625,
        left: width / -9,
    },
    mountain2: {
        position: 'absolute',
        width: width / 1.036,
        height: height / 4.3786,
        top: height / 1.4427,
        left: width / 9.72,
    },
    mountain3: {
        position: 'absolute',
        width: width / 2.47,
        height: height / 10,
        top: height / 1.376,
        left: width / 2.53,
    },
    mountain4: {
        position: 'absolute',
        width: width / 1.4578,
        height: height / 11.09,
        top: height / 1.2,
        left: width / 8.29667,
    },
    mountain5: {
        position: 'absolute',
        width: width / 1.0207,
        height: height / 4.1182,
        top: height / 1.33,
        left: width / -9.23,
    },
    behindTrees: {
        width: width / 0.7723,
        height: height / 4.8186,
        left: width / -7.1266,
        top: height / 1.2682,
    },
    cliff: {
        position: 'absolute',
        width: width / 1.8232,
        height: height / 2.1895,
        top: height / 1.8398,
        left: width / 2.0128,
    },
    home: {
        position: 'absolute',
        width: width / 4.1307,
        height: height / 8.016,
        left: width / 1.75,
        top: height / 1.98,
    },
    window: {
        position: 'absolute',
        width: width / 27.1535,
        height: height / 54.3745,
        top: height / 1.8743,
        left: width / 1.5105,
    },
    treeCliff: {
        position: 'absolute',
        width: width / 4.7472,
        height: height / 5.9121,
        top: height / 2.5254,
        left: width / 1.1938,
    },
    tree: {
        position: 'absolute',
        width: width / 0.8136,
        height: height / 5.562,
        top: height / 1.208,
        left: width / -7.7849,
    },
    sun: {
        position: 'absolute',
        width: width / 3.9463,
        height: height / 7.9024,
        left: width / 4.573,
        top: height / 2.6511,
    },
    clouds: {
        position: 'absolute',
        width: width / 0.7092,
        height: height / 4.2217,
        top: height / 9.8863,
        left: width / -6.8559,
    },
    switchButton:{
        width: '95%',
        display: 'flex',
        alignItems: 'flex-end'
    }
});