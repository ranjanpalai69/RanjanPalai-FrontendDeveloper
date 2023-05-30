

import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { legacy_createStore,applyMiddleware ,compose} from 'redux';


// creation of store
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
// subscribing our store, console logging the result so that we can check how and when our redux store is being invoked
store.subscribe(() => console.log(store.getState()));

export default store;
