import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');
const bg = { uri: "/Users/ermuun10/Desktop/dayAndNight/src/pics/background.png" };

export const DayAndNight = () => {
    return (
        <>
                <ImageBackground 
                source={bg}
                style={styles.bg}/>
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
});