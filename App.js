import React from 'react';
import { StyleSheet, Text, View, Alert, ToastAndroid, TextInput, Animated, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation'
import HomeScreen from './home'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      animasi : {
        title : new Animated.Value(0),
        marginTitle : new Animated.Value(0),
        subtitle : new Animated.Value(0)
      },
      username : '',
      password : '',
      data : {
        username : 'admin',
        password : 'admin'
      }
    }
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.animasi.title, {
        toValue : 1,
        duration : 1000
      }),
      Animated.timing(this.state.animasi.marginTitle, {
        toValue : -200,
        duration : 200
      })
    ]).start()
  }

  login() {
    const {username, password, data} = this.state
    const {navigate} = this.props.navigation
    if (username == data.username && password == data.password) {
      Alert.alert('Success', 'anda berhasil login')
      navigate('Home')
    } else {
      ToastAndroid.show('Username / Password tidak valid', ToastAndroid.LONG)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.title, {opacity : this.state.animasi.title, marginTop : this.state.animasi.marginTitle}]}>GRAMAYA</Animated.Text>
        <Text style={styles.subtitle}>Komunitas Programmer Muria Raya</Text>

        <TextInput
        style={{width: 250, height : 50, borderWidth : 1, marginBottom : 10, borderRadius: 10, borderColor : color.primary, paddingLeft : 20, paddingRight : 20}} 
        underlineColorAndroid="transparent"
        placeholder="Username"
        placeholderTextColor={color.primary}
        value={this.state.username}
        onChangeText={(text) => this.setState({username : text})}/>

        <TextInput
          style={{width: 250, height : 50, borderWidth : 1, borderRadius: 10, borderColor : color.primary, paddingLeft : 20, paddingRight : 20}}
          underlineColorAndroid="transparent" placeholder="Password"
          placeholderTextColor={color.primary}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({password : text})}/>

        <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text style={{color: '#FFF'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const color = {
  primary : '#EA4C88'
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    color : color.primary,
    marginBottom : 10,
    fontSize : 50
  },
  subtitle : {
    color : color.primary,
    fontStyle : 'italic',
    marginBottom : 20,
    fontSize : 20    
  },
  button : {
    backgroundColor : color.primary,
    padding : 20,
    borderRadius : 10,
    marginTop : 10
  }
});


// navigation
const nav = StackNavigator({
  Login : {
    screen : App
  },
  Home : {
    screen : HomeScreen
  }
}, {
  initialRouteName : 'Login',
  headerMode : 'none'
})

export default nav