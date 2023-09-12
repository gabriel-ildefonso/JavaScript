module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  module:{
    rules: [{
      test: /\.css$/,
      //A '\' serve para ignorar o '.' e o '$' indica que deve procurar por '.css' no final do arquivo 
      use: ['style-loader', 'css-loader']
    }]
  }
};
