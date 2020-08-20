import { StyleSheet } from 'react-native'
import { Archivo_700Bold } from '@expo-google-fonts/archivo'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },

    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular'
    },

    button: {
        height: 70,
        width: '100%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#04d361',
        alignItems: 'center',
        marginBottom: 10
    },

    okButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }
})

export default styles