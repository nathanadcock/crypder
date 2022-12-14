import React, { useContext } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Envelope, LockKey } from 'phosphor-react-native';
import { ApplicationContext } from '../contexts/ApplicationContext';
import StyledTextInput from '../components/atoms/StyledTextInput';
import PageCanvas from '../components/atoms/PageContent';
import { ThemedAccentText, ThemedMainText, ThemedSubText } from '../components/atoms/Themed';

export default function SignInScreen() {
  const { setActiveUser } = useContext(ApplicationContext);

  const signInHandler = () => {
    setActiveUser({
      id: 4,
      accessToken: 'test',
    });
  };

  return (
    <PageCanvas>
      <View style={styles.contentWrapper}>
        <View style={styles.headerWrapper}>
          <ThemedMainText style={styles.headerTitle}>
            Sign in
          </ThemedMainText>
          <ThemedSubText style={styles.headerTitleSub}>
            Please sign in to continue.
          </ThemedSubText>
        </View>
        <View style={styles.inputsWrapper}>
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
          <Pressable style={styles.loginButton} onPress={signInHandler}>
            <Text style={styles.loginButtonText}>Sign in</Text>
          </Pressable>
        </View>
        <View style={styles.footerWrapper}>
          <View style={{ flexDirection: 'row' }}>
            <ThemedSubText style={styles.footerQuestionText}>
              Forgot your password?
            </ThemedSubText>
            <ThemedAccentText style={styles.footerActionText}>
              Reset password
            </ThemedAccentText>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <ThemedSubText style={styles.footerQuestionText}>
              Don&apos;t have an account?
            </ThemedSubText>
            <ThemedAccentText style={styles.footerActionText}>
              Sign up
            </ThemedAccentText>
          </View>
        </View>
      </View>
    </PageCanvas>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrapper: {
    alignItems: 'center',
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  headerTitleSub: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputsWrapper: {
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
  footerWrapper: {
    alignItems: 'center',
    marginTop: 32,
  },
  footerQuestionText: {
    marginBottom: 12,
    marginRight: 4,
    fontSize: 14,
    fontWeight: 'bold',
  },
  footerActionText: {
    marginBottom: 12,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
