import {createStore} from 'redux'
import counter from './ducks/counter.js'

export default createStore(counter); // the 'reducer' is counter
