const path = require('path');

//Es un plugin para que webpack entienda que va atrabajar con html
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Es un plugin que extrae el codigo css de todos los archivos y los unfica en uno solo por cada js
//que contiene CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//Este plugin no sirve para copiar elementos de nuestro proyectos a produccion
const CopyWebpackPlugin = require('copy-webpack-plugin');

//Este plugin nos va a optimizar el codigo de css
const CssMinimizePlugin = require('css-minimizer-webpack-plugin');

//Este plugin permite otimizar el codigo de javascript
const TerserPlugin = require('terser-webpack-plugin');

//Este plugin sirve para leer variables de entorno
const DotEnv = require('dotenv-webpack');

//Este plugin limpia mi proyecto en produccion
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//"@babel/preset-env": Para Trabajar con las ultimas versiones de javascript
//@babel/plugin-transform-runtime: Para trabajar con asincronismo


module.exports = {
    //Punto de entrada de nuestra aplicacion
    entry: './src/index.js',
    //Es lo que prepara webpack para enviar a produccion
    output: {
        //PATH RESOLVE nos dice en que carpeta estamos parados
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/images/[hash][ext][query]"
    },
    //Con que extensiones va a trabajar nuestro proyecto
    resolve: {
        extensions: ['.js'],
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
        }
    },
    module: {

        rules: [
            // Nos sirve para ver con que extensiones vamos a trabajar por medio de expressiones regulares
            {
                test: /\.m?js$/,
                //excluye la carpeta node_modules
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css|.styl$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.png/,
                type: "asset/resource"
            },
            {
                //Configuracion para trabajar con fuentes en el proyecto
                test: /\.(woff|woff2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimeType: 'application/font-woff',
                        name: "[name].[contenthash].[ext]",
                        outputPath: './assets/fonts',
                        publicPath: '../assets/fonts',
                        esModule: false
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //va poder injectar elemntos
            inject: true,
            //template es el archivo que va leer webpack
            template: "./public/index.html",
            //aqui es donde quiero que se me aloje el html a produccion
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    //Obtengo la carpeta de archivos a copiar
                    from: path.resolve(__dirname, 'src', 'assets/images'),
                    //Aqui indico a donde quiero copiar esos elemnts pueden ser archivos o una carpeta
                    to: 'assets/images'
                }
            ]
        }),
        new DotEnv(),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizePlugin(),
            new TerserPlugin()
        ]
    }
}

