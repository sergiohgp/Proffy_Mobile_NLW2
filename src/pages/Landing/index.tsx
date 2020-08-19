import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'

function Landing() {
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Welcome, {'\n'}
                <Text style={styles.titleBold}>
                    What would you like to do?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>
                        Study
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>
                        Give classes
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Landing