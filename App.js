import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, StatusBar, AppState, AsyncStorage } from 'react-native'
import { Constants } from 'expo'
import { updateFocus } from 'react-navigation-is-focused-hoc'

import store from './store'
import HomeNavigator from './components/HomeNavigator'

export default class App extends React.Component {
    state = {
        isStoreLoading: false,
        store: store
    };

    componentWillMount() {
        var self = this;
        AppState.addEventListener('change', this._handleAppStateChange.bind(this));
        this.setState({isStoreLoading: true});
        AsyncStorage.getItem('completeStore').then((value)=>{
            if(value && value.length){
                let initialStore = JSON.parse(value);
                self.setState({store: createStore(reducers, initialStore, middleware)});
            }else{
                self.setState({store: store});
            }
            self.setState({isStoreLoading: false});
        }).catch((error)=>{
            self.setState({store: store});
            self.setState({isStoreLoading: false});
        });
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
    }

    _handleAppStateChange(currentAppState) {
        let storingValue = JSON.stringify(this.state.store.getState());
        AsyncStorage.setItem('completeStore', storingValue);
    }

    render() {
        if (this.state.isStoreLoading) {
            return (
                <View style={styles.loading}>
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            );
        }

        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <View style={{height: Constants.statusBarHeight}}>
                        <StatusBar/>
                    </View>
                    <HomeNavigator
                        onNavigationStateChange={(prevState, currentState) => {
                            updateFocus(currentState);
                        }}
                    />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 16,
        fontWeight: '500'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
