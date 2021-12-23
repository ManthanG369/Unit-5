const path=require("path")

module.exports={
        entry:"./code/index.js",
        output:{
                path:path.join(__dirname,"build"), // will create folder
                filename:"bundle.js",     //filename
        },
        mode:"development",
        module:{
                rules:[
                        {
                                test:/\.css$/,
                                use:["style-loader","css-loader"]
                        }
                ]
        },
        module: {
                rules: [
                  {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                  },
                  {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                  },
                ],
              },


};