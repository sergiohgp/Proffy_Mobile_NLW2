import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherITem from '../../components/TeacherItem'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    return (
        <View style={styles.container} >
            <PageHeader
                title="Available Proffys"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )}>
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Subject</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Which subject?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Week day</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="What day?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Time</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="What time?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filter</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <TeacherITem bio="Biology professor" cost={20} />
                <TeacherITem bio="Biology professor" cost={20} />
                <TeacherITem bio="Biology professor" cost={20} />
                <TeacherITem bio="Biology professor" cost={20} />
                <TeacherITem bio="Biology professor" cost={20} />
                <TeacherITem bio="Biology professor" cost={20} />

            </ScrollView>
        </View>
    )
}

export default TeacherList