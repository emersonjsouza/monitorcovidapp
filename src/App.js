import React, { Component } from 'react';
import {
  View
  , Text
  , FlatList
  , StatusBar
} from 'react-native';
import Server from './utils/Server'
import Box from './components/box'
import moment from 'moment'
import styles  from './styles';

class App extends Component {
  state = {
    isLoading: true,
    data: {}
  }

  componentDidMount = async () => {
    let { data } = await Server.get('/numero/casos/pais/Brasil');
    if (data) {
      this.setState({ data, isLoading: false });
    }
  }

  renderItem({ item }) {
    return (<View style={styles.historyBoxContainerRow}>
      <Text style={styles.historyBoxContainerTitle}>{moment(item.date).format('DD/MM/YYYY')}</Text>
      <View style={styles.historyBoxContainerItem}>
        <View style={styles.historyBoxContainerBox}>
          <Text style={styles.historyBoxContainerBoxQtd}>{item.new_cases}</Text>
          <Text style={styles.historyBoxContainerBoxTitle}>NOVOS CASOS</Text>
        </View>
        <View style={styles.historyBoxContainerBox}>
          <Text style={styles.historyBoxContainerBoxQtd}>{item.new_cases}</Text>
          <Text style={styles.historyBoxContainerBoxTitle}>MORTES</Text>
        </View>
      </View>
    </View>)
  }

  render() {
    const { isLoading, data } = this.state;

    return (<View style={styles.main}>
      <StatusBar backgroundColor="#575a89" />
      <View style={styles.navBar}>
        <Text style={styles.navBarTitle}>COVID-19 MONITOR</Text>
      </View>
      <View style={styles.header}>
        <Box qtd={data.total_casos} title='casos' isLoading={isLoading} />
        <Box qtd={data.total_mortes} title='mortes' isLoading={isLoading} />
      </View>
      <View style={styles.historyBox}>
        <Text style={styles.historyBoxTitle}>HISTÓRICO DE CASOS DIARIOS</Text>
        {!isLoading && <View style={styles.historyBoxContainer}>
          <FlatList data={data.detalhes_por_dia}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.date}
          />
        </View>}
      </View>
    </View>)
  }
}

export default App;
