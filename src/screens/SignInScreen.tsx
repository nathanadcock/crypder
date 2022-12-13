import { Envelope, LockKey } from 'phosphor-react-native';
import React, { useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import StyledTextInput from '../components/StyledTextInput';
import { Text, View } from '../components/Themed';
import { ApplicationContext } from '../contexts/ApplicationContext';

export default function SignInScreen() {
  const { setActiveUser } = useContext(ApplicationContext);

  const signInHandler = () => {
    setActiveUser({
      id: 4,
      accessToken: 'test',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Sign in</Text>
        <Text style={styles.headerText}>Please sign in to continue.</Text>
      </View>
      <View style={styles.inputContainer}>
        <StyledTextInput
          label="Email"
          icon={<Envelope />}
          style={{ marginBottom: 16 }}
        />
        <StyledTextInput
          label="Password"
          icon={<LockKey />}
          style={{ marginBottom: 16 }}
          secureTextEntry
        />
        <Pressable
          style={styles.loginButton}
          onPress={signInHandler}
        >
          <Text style={styles.loginButtonText}>Sign in</Text>
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.footerQuestionText}>Forgot your password?</Text>
          <Text style={styles.footerActionText}>Reset password</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.footerQuestionText}>Don&apos;t have an account?</Text>
          <Text style={styles.footerActionText}>Sign up</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerContainer: {
    justifyContent: 'center',
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#666666',
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  footerQuestionText: {
    marginBottom: 12,
    marginRight: 4,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#666666',
  },
  footerActionText: {
    marginBottom: 12,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#DD814D',
  },
  inputContainer: {
    maxWidth: 360,
    width: '88%',
  },
  loginButton: {
    alignItems: 'center',
    borderRadius: 12,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#000',
  },
  loginButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
