# grommet-standalone

This project has been created to help understand what is the minimum
set of dependencies for Grommet to work inside your existing app.

If you are using a module bundler such as Webpack or Browserify, you
will need two loaders: a Javascript loader and a SCSS loader.

Although you can use the minified css in production, sometimes it is useful
to access the SCSS version, specially if you want to override the variables,
or create a new theme.

In this project we are using Webpack, here is the required configuration for
the loaders:

```javascript
module: {
  loaders: [
    {
      test: /\.js/,
      exclude: /node_modules/,
      loaders: ['babel']
    },
    {
     test: /\.scss$/,
     loader: 'style!css!sass?outputStyle=compressed'
    }
  ]
},
sassLoader: {
  includePaths: [
    './node_modules',
    // this is required only for NPM < 3.
    // Dependencies are flat in NPM 3+ so pointing to
    // the internal grommet/node_modules folder is not needed
    './node_modules/grommet/node_modules'
  ]
}
```

The SASS loader requires you to include the paths you want them to look for
modules. Please note that `./node_modules/grommet/node_modules` is only required
if you are using an old NPM version (< 3).

The next step is to include the SASS import into your javascript file:

```javascript
import 'grommet/scss/vanilla/index';

const Main = () => <div>Hi</div>;

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
```

In this project we are using the style loader, which means that the bundle will
inject the css as a style tag in the document header.
But this configuration is not the only way to generate the styles.
For example, this SASS loader configuration outputs a css file
in the dist folder:

```javascript
{
 test: /\.scss$/,
 loader: 'file?name=assets/css/[name].css!sass'
}
```

Now in your server there will be two requests, one to get the Javascript and
another one to get the css. So, there is an architectural decision that you
need to make depending on the size of your bundle.

Please join our Slack channel if you have any questions regarding Grommet or
this project: http://slackin.grommet.io
