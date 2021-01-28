import React, { useRef, useState } from 'react';
import { Pressable, View, Animated, StyleSheet, SafeAreaView } from 'react-native';

export const Switch = () => {
    const [isRight, setIsRight] = useState(false);
    const move = useRef(new Animated.Value(0)).current;

    const moveBall = () => {
        if (isRight === false) {
            Animated.timing(move, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
            setIsRight(true)
        } else {
            Animated.timing(move, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }).start();
            setIsRight(false)
        }
    }

    const right = move.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 30],
    });

    const animStyle = {
        transform: [
            {
                translateX: right,
            },
        ],
    };

    return (
        <>
            <SafeAreaView>
                <Pressable onPress={moveBall} >
                    <View style={styles.container}>
                        <Animated.View style={[styles.sun, animStyle]} >
                        </Animated.View>
                    </View>
                </Pressable>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    sun: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'yellow',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 60,
        height: 30,
        borderRadius: 50,
        padding: 5
    }
})