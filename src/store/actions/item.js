import {LOAD_ITEMS} from '../types'
// import { DATA } from '../../data'
import axios from 'axios'

export const loadItems = () => async dispatch => {
    const response = await axios.get
    ('https://next.json-generator.com/api/json/get/4k0jZaoFd')

    dispatch({
        type: LOAD_ITEMS,
        payload: response.data
    })
    }
    