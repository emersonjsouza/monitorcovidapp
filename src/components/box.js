import React, { Component } from 'react';
import {
  View
  , Text
  , StyleSheet
  , ActivityIndicator
} from 'react-native'

const Box = ({ qtd, title, isLoading }) => {
  return (<View style={styles.headerBox}>
    {!isLoading && <Text style={styles.headerBoxTitle}>{qtd}</Text>}
    {isLoading &&  <ActivityIndicator size="large" color="#fff" />}
    <Text style={styles.headerBoxSubTitle}>{title}</Text>
  </View>)
}

export default Box;

const styles = StyleSheet.create({
  headerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBoxTitle: {
    fontSize: 32,
    color: '#FFF'
  },
  headerBoxSubTitle: {
    marginTop: 8,
    fontSize: 12,
    color: '#FFF'
  },
});