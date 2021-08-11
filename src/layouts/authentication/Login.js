import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ArrowForwardIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import { ConfigurationProvider } from "../../configuration";
import {LoadingIndicator} from "../../core/components";

export default ({ callback }) => {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const { apiInstance } = useContext(ConfigurationProvider);
    const [loading, setLoading] = React.useState(false);

    const onSignInButtonPress = () => {
        setLoading(true);
        apiInstance.post("/api/authenticate", {
            email,
            password,
        }).then(callback).catch(response => {
            console.log("error", response)
        }).finally(() => setLoading(false));
    };

    return (
        <KeyboardAvoidingView>
            <ImageOverlay
                style={styles.container}
                source={require('./assets/boxes.jpg')}>
                <View style={styles.signInContainer}>
                    <Text
                        style={styles.signInLabel}
                        status='control'
                        category='h4'>
                        SIGN IN
                    </Text>
                    <Button
                        style={styles.signUpButton}
                        appearance='ghost'
                        status='control'
                        size='giant'
                        accessoryLeft={ArrowForwardIcon}
                        onPress={null}>
                        Sign Up
                    </Button>
                </View>
                <View style={styles.formContainer}>
                    <Input
                        label='EMAIL'
                        placeholder='Email'
                        status='control'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        style={styles.passwordInput}
                        secureTextEntry={true}
                        placeholder='Password'
                        label='PASSWORD'
                        status='control'
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <Button
                    status='control'
                    size='large'
                    disabled={!!loading}
                    onPress={onSignInButtonPress}
                    accessoryLeft={loading ? LoadingIndicator : null}>
                    SIGN IN
                </Button>
            </ImageOverlay>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
    },
    socialAuthContainer: {
        marginTop: 48,
    },
    evaButton: {
        maxWidth: 72,
        paddingHorizontal: 0,
    },
    formContainer: {
        flex: 1,
        marginTop: 48,
    },
    passwordInput: {
        marginTop: 16,
    },
    signInLabel: {
        flex: 1,
    },
    signUpButton: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 0,
    },
    socialAuthButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    socialAuthHintText: {
        alignSelf: 'center',
        marginBottom: 16,
    },
});
