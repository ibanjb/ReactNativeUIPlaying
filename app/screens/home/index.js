import React from 'react';
import { FlatList, Text, Image, View, TouchableOpacity } from 'react-native';
import { RkText, RkCard, RkStyleSheet } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {SocialBar} from '../../components/socialBar';
import * as Actions from '../../redux/actions';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.props.getMoreData();    
  }

  
  render() {
    return (
        <View>
            <Text> home </Text>
        </View>
    );
    /*
    return (
      <FlatList data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                style={styles.root}/>

    )
    */
  }
}

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  overlay: {
    justifyContent: 'flex-end',
  },
  footer: {
    width: 240
  }
}));