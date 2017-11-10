import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, StatusBar, AppState, AsyncStorage } from 'react-native'
import { Constants } from 'expo'
import { createStore, applyMiddleware } from 'redux'
import { Foundation } from '@expo/vector-icons'

import store, { middlewares } from './store'
import RouterWithRedux from './components/RouterWithRedux'
import rootReducer from './reducers'
import { setLocalNotification } from './utils';

const getSceneStyle = () => ({
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
});

class App extends React.Component {
    state = {
        isStoreLoading: false,
        store
    };

    componentWillMount() {
        AppState.addEventListener('change', this._handleAppStateChange.bind(this));
        this.setState({ isStoreLoading: true });
        AsyncStorage.getItem('completeStore').then((value)=> {
            if (value && value.length) {
                let initialStore = JSON.parse(value);
                this.setState({ store: createStore(rootReducer, initialStore, applyMiddleware(...middlewares)) });
            } else {
                this.setState({ store });
            }
            this.setState({ isStoreLoading: false });
        }).catch(error => {
            this.setState({ store: store });
            this.setState({ isStoreLoading: false });
        });

        setLocalNotification();
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
                    <RouterWithRedux getSceneStyle={getSceneStyle}/>
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

export default App