import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from 'react-native';

import { Focus, FocusHistory } from './src/features/index';
import { colors } from './src/utils/index';
import { Timer } from './src/features/index';

export default function App() {
  const [subject, setSubject] = useState();
  const [history, setHistory] = useState([]);
  const addSubject = (value) => setSubject(value);

  return (
    <SafeAreaView style={styles.container}>
      {!subject && (
        <>
          <Focus addSubject={addSubject} />
          <FocusHistory history={history} />
        </>
      )}
      {subject != null && (
        <Timer
          focusSubject={subject}
          onTimerEnd={(focusedSubject) => {
            setHistory([focusedSubject, ...history]);
          }}
          clearSubject={() => setSubject()}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
