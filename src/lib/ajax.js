// 相关参考 https://www.kancloud.cn/yunye/axios/234845
import axios from 'axios';

const debug = process.env.NODE_ENV !== 'production';

export const fetch = config => new Promise((resolve, reject) => {
  axios.request(config)
    .then(res => {resolve(res.data)})
    .catch(err => {reject(err)});
});
// 用于获取数据，一个或多个
export const get = (url, config) => new Promise((resolve, reject) => {
  axios.get(url, config)
    .then(res => {resolve(res.data)})
    .catch(err => {reject(err)});
});
// 用于删除资源
export const del = (url, config) => new Promise((resolve, reject) => {
  axios.delete(url, config)
    .then(res => {resolve(res.data)})
    .catch(err => {reject(err)});
});
// 用于获取资源的元数据，例如数据的哈希值或者最后的更新时间
export const head = (url, config) => new Promise((resolve, reject) => {
  axios.head(url, config)
    .then(res => {resolve(res.data)})
    .catch(err => {reject(err)});
});
// 用于新建资源
export const post = (url, data, config) => new Promise((resolve, reject) => {
  axios.post(url, data, config)
    .then(res => {resolve(res.data)})
    .catch(err => {reject(err)});
});
// 用于更新资源，提交更新后的完整数据
export const put = (url, data, config) => new Promise((resolve, reject) => {
  axios.put(url, data, config)
    .then(res => {resolve(res.data)})
    .catch(err => {reject(err)});
});
// 用于更新数据，提交可供改变的属性
export const patch = (url, data, config) => new Promise((resolve, reject) => {
  axios.patch(url, data, config)
    .then(res => {resolve(res.data)})
    .catch(err => {reject(err)});
});
