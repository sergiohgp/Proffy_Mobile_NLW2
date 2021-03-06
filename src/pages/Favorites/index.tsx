import React from 'react'
import { View, ScrollView } from 'react-native'
import PageHeader from '../../components/PageHeader'

import TeacherITem from '../../components/TeacherItem'


import styles from './styles'

function Favorites() {
    return (
        <View style={styles.container} >
            <PageHeader title="Favorite Proffys" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >


            </ScrollView>
        </View>
    )
}

export default Favorites