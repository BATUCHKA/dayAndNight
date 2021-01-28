import React from 'react';
import Svg, { Defs, Path, Stop, LinearGradient } from 'react-native-svg'

export const Background:React.FC<any> = (props) => {
    return (
        <>
            <Svg viewBox="0 0 263 525" fill="none" {...props} >
                <Path d="M-28.3643 -12.4545L-28.3643 524.308H273.612L273.612 -12.4545H-28.3643Z" fill="url(#paint0_linear)" />
                <Defs>
                    <LinearGradient id="paint0_linear" x1="122.631" y1="524.308" x2="122.631" y2="-12.4545" gradientUnits="userSpaceOnUse">
                        <Stop offset="0.33" stopColor="#FBE57F" />
                        <Stop offset="0.4" stopColor="#FDCA8E" />
                        <Stop offset="0.48" stopColor="#FEAE9D" />
                        <Stop offset="0.52" stopColor="#FFA3A3" />
                        <Stop offset="0.55" stopColor="#F8A3A3" />
                        <Stop offset="0.59" stopColor="#E4A3A3" />
                        <Stop offset="0.64" stopColor="#C3A4A4" />
                        <Stop offset="0.734375" stopColor="#96A5A4" />
                        <Stop offset="0.838542" stopColor="#5DA6A5" />
                        <Stop offset="0.9999" stopColor="#51A6A5" />
                        <Stop offset="1" stopColor="#06385D" />
                    </LinearGradient>
                </Defs>
            </Svg>

        </>
    );
};
