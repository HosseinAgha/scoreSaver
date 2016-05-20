module.exports = config( process.env.NODE_ENV != "production" )

function config(devMode) {
  var options = {
    output: {
      path: "./build",
      filename: "[name].bundle.js",
      publicPath: "/build/"
    },
    devtool: "cheap-module-eval-source-map",
    module: {
      loaders: [
        { loader: "style!css", test: /\.css$/, exclude: /node_modules/ },
        {
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          test: /\.jsx?$/, // use babel both for js and jsx files
          exclude: /node_modules/,
          query: {
            presets:['react', 'es2015']
          }
        }
      ]
    }
  }

  // Add configs dynamically based on dev and production mode
  if(devMode == true) {
    options.module.loaders.push({
      loader: 'style!css?module&sourceMap&localIdentName=[name]_[local]_[hash:base64:3]!stylus',
      test: /\.styl$/
    })
    options.entry = {
      app: [
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        './src/main.jsx'
      ]
    } 
  } else {
    options.entry.loaders.push({
      loader: 'style-loader!css-loader?module!stylus-loader',
      test: /\.styl$/
    })
    options.entry = {
      app: './src/main.jsx'
    }
  }

  return options;
};
