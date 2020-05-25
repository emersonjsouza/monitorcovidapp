import axios from 'axios'
import Settings from '../config/settings'

export default axios.create({
    baseURL: Settings.API
});