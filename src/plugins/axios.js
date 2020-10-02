import Vue from 'vue';
import axios from 'axios';
import { API_URL } from '../config';

axios.defaults.baseURL = API_URL;
Vue.prototype.$http = axios;
