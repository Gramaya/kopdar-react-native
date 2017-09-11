import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {StackNavigator} from 'react-navigation'

class Home extends Component {
    static navigationOptions = {
        title : 'Gramaya App'
    }
    render() {
        return (
            <View>
                <Text>Halaman Depan</Text>
            </View>
        )
    }
}

const App = StackNavigator({
    Home : {
        screen : Home
    }
})
export default App