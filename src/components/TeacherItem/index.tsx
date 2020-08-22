import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

export interface Teacher {
    id: number
    avatar: string
    bio: string
    cost: number
    name: string
    subject: string
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    return (
        <View style={styles.container} >
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        {teacher.name}
                    </Text>
                    <Text style={styles.subject}>
                        {teacher.subject}
                    </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.cost}>
                    $/hr {'   '}
                    <Text style={styles.costValue}>
                        ${teacher.cost}
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