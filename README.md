[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![test][test]][test-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <h1>Webpack Canary</h1>
  <p>Run dependency examples against webpack versions to detect incompatibilities.<p>
</div>

<h2 align="center">Usage</h2>

### Squawk

Expected usage of the canary is to check multiple versions of webpack against a set of dependencies and squawk if there are any failures. The `squawk` task is a runner to just that. Webpack versions are stored in `webpack-versions.json` and dependency versions are stored in `dependency-versions.json`.

Use `npm run squawk` to run all dependencies against all versions of webpack, and generate a report with successes and failures. This command does not take any flags.

### CLI Interface

To run a specific dependency version against a specific version of webpack, use the canary CLI interface

```
node index.js --webpack=<webpack_reference> --dependency=<dependency_reference>
```

 - `--webpack` can be a version or path to remote repository
 - `--dependency` can be a dependency name (with or without version) or path to remote repository

#### Example

```
# Published versions in registry
node index.js --webpack=2.2 --dependency=raw-loader

# Development versions in remote repositories
node index.js --webpack=webpack/webpack#master --dependency=https://github.com/alistairjcbrown/raw-loader/
```

<h2 align="center">Compatibility</h2>

A dependency must include an `examples` directory which contains an example setup with corresponding webpack config. This config is run with the installed webpack version to confirm compatibility.

<h2 align="center">To Do</h2>

 - [x] ES6
 - [x] Tests
 - [x] Flag to control log level verbosity
 - [x] Programatic interface (split CLI flags from app)
 - [x] Script to run for multiple dependencies
 - [x] Linting
 - [x] Show summary successes / failure after running squawk
 - [x] Change logLevel to loglevel
 - [x] Investigate why failing on webpack 1 causes failure in webpack 2 (cache?)
 - [x] Update summary to use progress bar and collapse table if all success
 - [x] Update readme
 - [x] Output recreation command when squawk failure
 - [x] Support multiple examples and output in table
 - [ ] Split webpack 1 configs and 2 configs in examples - support non-suported examples
 - [ ] Add ability to run more than just loaders / plugins
 - [x] Move from callbacks to promises
 - [ ] Don't use npm cli for installing of webpack & dependency
 - [ ] Install webpack & dependency somewhere else (not `node_modules` - avoid potential colisions)
 - [ ] Add more folders as example targets (e.g. `demo`)
 - [ ] Allow running dependency tests with the specific webpack version *
 - [x] Refactor `InstallObject`
 - [ ] Add `--progress` option with a progress bar
 - [ ] Add `--versions` to change the versions file path for `squawk`
 - [ ] Expose `canary` and `squawk` as binaries

 `*` - Not sure if possible

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/635903?v=3&s=150">
        </br>
        <a href="https://github.com/alistairjcbrown">Alistair Brown</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">
        </br>
        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">
        </br>
        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">
        </br>
        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">
        </br>
        <a href="https://github.com/TheLarkInn">Sean Larkin</a>
      </td>
    </tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/webpack-canary.svg
[npm-url]: https://npmjs.com/package/webpack-canary

[deps]: https://david-dm.org/webpack-contrib/webpack-canary.svg
[deps-url]: https://david-dm.org/webpack-contrib/webpack-canary

[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack

[test]: http://img.shields.io/travis/webpack-contrib/webpack-canary.svg
[test-url]: https://travis-ci.org/webpack-contrib/webpack-canary

[cover]: https://codecov.io/gh/webpack-contrib/webpack-canary/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/webpack-canary
