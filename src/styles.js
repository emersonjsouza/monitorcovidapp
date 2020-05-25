import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
      flex: 1
    },
    navBar: {
      height: 44,
      backgroundColor: '#575a89',
      justifyContent: 'center',
      alignItems: 'center'
    },
    navBarTitle: {
      color: '#FFF',
      fontWeight: 'bold'
    },
    header: {
      height: 140,
      backgroundColor: '#7679a5',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    historyBox: {
      backgroundColor: '#ddd',
    },
    historyBoxTitle: {
      margin: 10,
      textAlign: 'center',
      color: '#607d8b'
    },
    historyBoxContainer: {
      justifyContent: 'center',
      backgroundColor: '#FFF',
      marginRight: 15,
      marginLeft: 15,
      borderRadius: 10,
      padding: 10,
      marginBottom: 10
    },
    historyBoxContainerRow: {
      height: 80,
      paddingTop: 10,
      borderBottomWidth: .5,
      borderBottomColor: '#ccc'
    },
    historyBoxContainerItem: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    historyBoxContainerTitle: {
      textAlign: 'center',
      color: '#222d32'
    },
    historyBoxContainerBox: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    historyBoxContainerBoxTitle: {
      fontSize: 9,
      color: '#222d32'
    },
    historyBoxContainerBoxQtd: {
      fontSize: 24,
      color: '#222d32'
    }
  });

export default styles;