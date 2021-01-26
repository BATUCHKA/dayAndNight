import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');
const bg = { uri: "/Users/ermuun10/Desktop/dayAndNight/src/pics/background.png" };
const bigMountain = { uri: "/Users/ermuun10/Desktop/dayAndNight/src/pics/mountain-6 top.png"}
const mountainTexture = { uri: "/Users/ermuun10/Desktop/dayAndNight/src/pics/mountain-texture.png" }

export const DayAndNight = () => {
    return (
        <>
                <ImageBackground 
                source={bg}
                style={styles.bg}>
                    <Image
                    source={bigMountain}
                    style={styles.bigMountain}
                    />
                    <Image
                        source={mountainTexture}
                        style={styles.mountainTexture}/>
                </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    full: {
        flex: 1,
    },
    bg: {
        width: width,
        height: height,
    },
    bigMountain: {
        position: 'absolute',
        width: width / 1.05,
        height: height / 3.35,
        zIndex: 0,
        top: height / 1.636,
    },
    mountainTexture: {
        position: 'absolute',
        width: width / 2.4456,
        height: height/ 5.3,
        left: width / 15,
        zIndex: 0,
        top: height / 1.64,
    },
});