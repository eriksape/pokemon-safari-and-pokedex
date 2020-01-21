require('ignore-styles');

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['jpg', 'jpeg', 'png', 'svg', 'gif'],
  name: '/assets/images/[hash].[ext]',
});

require('./server.js');
