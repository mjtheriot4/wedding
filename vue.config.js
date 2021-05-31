module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/wedding/' // note the trailing slash
    : '/',
};
