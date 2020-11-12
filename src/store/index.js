import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import app from './modules/app'
// import settings from './modules/settings'
// import user from './modules/user'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

// console.log('modulesFiles: ', modulesFiles.keys())

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys()
  // 先過濾掉沒用的
  .filter(filePath => filePath.match(/^\.\/(.*)\/index.\w+$|\.\/(\w+)[^/]+$/))
  .reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath
      .replace(/^\.\/(.*)\/index.\w+$/, '$1') // 找資料夾中的 index.js
      .replace(/^\.\/(\w+)[^/]+$/, '$1') // 找當前目錄的 .js

    const value = modulesFiles(modulePath)

    modules[moduleName] = value.default
    return modules
  }, {})

const store = new Vuex.Store({
  modules,
  getters,
})

export default store
