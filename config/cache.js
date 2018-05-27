// 运行与服务端的js
// node.js lru-cache
import LRU from 'lru-cache'

const lruCache = LRU({
  // 缓存队列长度
  max: 2000,
  // 缓存有效期
  maxAge: 1000 * 60 * 60 * 24
})

export const cache = {
  get: function (key) {
    let result = lruCache.get(key);

    if (result) {
      return result
    }

    return null
  },
  set: function (key, value) {
    if (value) {
      lruCache.set(key, value);
      return true
    }

    return false
  },
  //乘法
  accMul: function (arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length
    } catch (e) {
    }
    try {
      m += s2.split(".")[1].length
    } catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
  },
//加法
  accAdd: function (arg1, arg2) {
    var r1, r2, m;
    try {
      r1 = arg1.toString().split(".")[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split(".")[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  }
}
