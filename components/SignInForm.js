import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios'

const ROOT_URL = 'https://us-central1-one-time-password-2a641.cloudfunctions.net'

class SignInForm extends Component {

    state = {
        phone: '',
        code: ''
    }

    handleSubmit = async () => {
        try {
            await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { 
                phone: this.state.phone, 
                code: this.state.code 
            })
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter phone number</FormLabel>
                    <FormInput 
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter verification code</FormLabel>
                    <FormInput 
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    />
                </View>
                <Button onPress={this.handleSubmit} title='Submit' />
            </View>
        )
    }
}

export default SignInForm