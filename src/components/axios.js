import axios from "axios";
import {bseUrl} from './constant/Constant'


const instance = axios.create({
  baseURL : bseUrl
});

export default instance