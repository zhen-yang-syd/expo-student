import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '@/styles/onboarding/onboard';


export default function OnBoardingScreen() {
    let [fontsLoaded, fontsError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_700Bold,
    });
    if (!fontsLoaded && !fontsError) return null;
    return (
        <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={styles.firstContainer}>
                <View>
                    <Image source={
                        require('@/assets/images/edge-logo.webp')
                    } style={styles.logo} />
                </View>
            </View>
        </LinearGradient>
    )
}

