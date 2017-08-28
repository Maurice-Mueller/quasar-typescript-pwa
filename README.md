== Init Standard Kit

* `npm install -g quasar-cli`
* `quasar init pwa`
* `cd pwa`
* `npm install`
* `quasar dev`
  * test if everything works (i.e. starts without errors)

== Add TypeScript support

=== Remove Babel and ESLint

* remove `.babelrc`
* remove `.eslintignore`
* remove `.eslintrc.js`
* from `package.json`
  * all `babel-` dependencies
  * `eslint` dependency
  * all `eslint-` dependencies
* from `build/webpack.base.conf.js`
  * module.rules
    * remove `eslint-loader`
    * remove `babel-loader`
    * adapt `vue-loader`
      * ```
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            postcss: cssUtils.postcss,
            loaders: cssUtils.styleLoaders({
              sourceMap: useCssSourceMap,
              extract: env.prod
            })
          }
        }
        ```
* test if everything works (i.e. starts without errors)
  * `rm -rf node_modules`
  * `npm install`
  * `quasar dev`
