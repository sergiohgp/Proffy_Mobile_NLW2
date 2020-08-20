import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import giveClassesBackground from '../../assets/images/give-classes-background.png'

import styles from './styles'

function GiveClasses() {
    const { goBack } = useNavigation()

    function handleBackToPreviousPage() {
        goBack()
    }

    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={giveClassesBackground} style={styles.content} resizeMode="contain">
                    <Text style={styles.title}>
                        Would you like to become a Proffy?
                    </Text>

                    <Text style={styles.description}>
                        First, you have to register on our web plataform.
                    </Text>

                </ImageBackground>
                <TouchableOpacity onPress={handleBackToPreviousPage} style={styles.button}>
                    <Text style={styles.okButtonText}>
                        OK
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default GiveClasses