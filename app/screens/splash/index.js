import React, { Component } from 'react';
import { StatusBar, StyleSheet, FlatList, View, Text, ActivityIndicator, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RkText, RkTheme, RkButton } from 'react-native-ui-kitten';

import Home from '../home';
import { ProgressBar } from '../../components/progressBar';
import { scale } from '../../utils/scale';
import * as Actions from '../../redux/actions';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0
        };
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        StatusBar.setHidden(true, 'none');

        //testing progress bar        
        this.timer = setInterval(() => {
            let random = Math.random() * 0.5;
            let progress = this.state.progress + random;
            if (progress > 1) {
                progress = 1;
            }
            this.setState({progress}); 
        });

        this.props.getData();        
    }

    render() {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer} style={{ width: width, height: height, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator animating={true} style={{ paddingBottom: 20}}/>
                    <ProgressBar
                        color='tomato'
                        style={styles.progress}
                        progress={this.state.progress} width={scale(320)}/>
                </View>
            );
        } else {
            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20 }}>
                    <StatusBar backgroundColor='tomato' barStyle='light-content' />
                    <Text> Testing... </Text>
                    <RkButton>Click me!</RkButton>
                    <Home />
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}/>
                </View>
            );
        }
    }

    renderItem({item, index}) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(index) + 1)}{". "}{item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        )
    }
};

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 3,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});