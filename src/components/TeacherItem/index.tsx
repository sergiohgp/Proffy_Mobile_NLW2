import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

interface TeacherItemProps {
    bio: string
    cost: number
}

const TeacherItem: React.FC<TeacherItemProps> = ({ bio, cost }) => {
    return (
        <View style={styles.container} >
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/diego3g.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        Diego Fernandes
                    </Text>
                    <Text style={styles.subject}>
                        Biology
                    </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.cost}>
                    $/hr {'   '}
                    <Text style={styles.costValue}>
                        ${cost}
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.liked]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                            Contact Proffy
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem