import React from 'react'
import { Provider, connect } from 'react-redux'
import { StyleSheet, Text, View, StatusBar, AppState, AsyncStorage } from 'react-native'
import { Constants } from 'expo'
import {
    Scene,
    Tabs,
    Stack,
} from 'react-native-router-flux';

import store from './store'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import TabIcon from './components/TabIcon'
import * as scenes from './scenes'
import RouterWithRedux from './components/RouterWithRedux'

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
        var self = this;
        AppState.addEventListener('change', this._handleAppStateChange.bind(this));
        this.setState({ isStoreLoading: true });
        AsyncStorage.getItem('completeStore').then((value)=> {
            if (value && value.length) {
                let initialStore = JSON.parse(value);
                self.setState({ store: createStore(reducers, initialStore, middleware) });
            } else {
                self.setState({ store: store });
            }
            self.setState({ isStoreLoading: false });
        }).catch(error => {
            self.setState({ store: store });
            self.setState({ isStoreLoading: false });
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
                    <RouterWithRedux getSceneStyle={getSceneStyle}>
                        <Tabs key="home" showLabel={false} tabBarStyle={styles.tabBarStyle}>
                            <Stack key="tabDecks" title="Decks" icon={TabIcon}>
                                <Scene key={scenes.DECK_LIST} component={DeckList}/>
                                <Scene key={scenes.DECK_DETAIL} component={DeckDetail}/>
                                <Scene key={scenes.ADD_CARD} component={AddCard}/>
                                <Scene key={scenes.QUIZ} component={Quiz}/>
                            </Stack>
                            <Stack key="tabNewDeck" title="New Deck" icon={TabIcon}>
                                <Scene key={scenes.NEW_DECK} component={AddDeck}/>
                            </Stack>
                        </Tabs>
                    </RouterWithRedux>
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
    tabBarStyle: {
        backgroundColor: '#eee',
    },
});

export default App