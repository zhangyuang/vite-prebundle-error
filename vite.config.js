// @ts-check
const reactRefresh = require('@vitejs/plugin-react-refresh');


const config = {

  plugins: [reactRefresh({
    parserPlugins: ['classProperties', 'classPrivateProperties'],
  })],
  resolve:{
    mainFields: ['browser', 'main', 'module', 'jsnext:main', 'jsnext'],
  }
}

module.exports = config
