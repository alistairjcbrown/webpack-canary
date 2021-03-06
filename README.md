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

<h2 align="center">Installation</h2>

```bash
npm install --save-dev webpack-canary
# or
yarn add --dev webpack-canary
```

Once installed it will provide two binaries `canary` and `squawk`. Canary can be
installed globally but it's best to install it on a project level.

Another way of using the Canary is by pulling down this repo and running the
code from it, treating it as a general Webpack testbed.

<h2 align="center">Usage</h2>

### Squawk

Expected usage of the canary is to check multiple versions of webpack against a set of dependencies and squawk if there are any failures. The `squawk` task is a runner to just that. Webpack and dependency versions should stored in `webpack-canary.conf.js` in your project root folder. Check out the [example](squawk/webpack-canary.example.conf.js) for the config format.

Use `npm run squawk` to run all dependencies against all versions of webpack, and generate a report with successes and failures. This command supports only one flag: `--verbose`.

The squawk command can receive all the CLI options listed bellow, but they also can be set in the config (but with camelCase instead of kebab-case). The config has the priority before CLI arguments if both are set.

#### For loaders and plugins

If a loader or plugin is the tool user, it will most likely define all webpack versions it wants to support with the current dependency version.

For example, if a loader `foo-loader` wants to support webpack `^2.3.0` it should set the wanted Webpack versions to `2.3`, `3`, and `webpack/webpack#master` to check the latest version.

#### For webpack

If Webpack is the tool user, it will most likely define the latest webpack version and a list of dependencies and their versions.

### npm ignore

If you have npm ignore defined, it will most likely skip the download of tests and examples. Therefore, you may need to use tarballs for dependencies instead of regular npm versions: `https://github.com/webpack/webpack-dev-server/archive/v2.3.0.tar.gz` instead of `webpack-dev-server@2.3.0`. Keep in mind that the `2.3.0` version in the url is defined with the git tag, not with the npm release!

### CLI Interface

To run a specific dependency version against a specific version of webpack, use the canary CLI interface.

```
canary --webpack=<webpack_reference> --dependency=<dependency_reference>
```

 - `--webpack` can be a version or path to remote repository
 - `--dependency` can be a dependency name (with or without version) or path to remote repository
 - `--package-manager` (optional) can be set to `yarn` to use yarn for installation of modules. If not set (or set to anything else) it will default to npm
 - `--test` A command that will run dependency tests
 - `--test-path` A temporary path where the dependency will be copied and the tests will be run. Important when jest is used as test runner as it will ignore all paths that have `node_modules` in them. The default path is `<webpack-canary>/test_modules/test-dependency`
 - `--example-dir` can be one or more relative paths to examples folders (e.g. `--example-dir ./demo` or `--example-dir demo`). If not set, examples check will be skipped.
 - `--progress` Show the progress bar (it will override the `loglevel` option and set it to `warn`)
 - `--timeout` Interrupts command execution after the defined time (default is 60s). Applies to installing dependencies and running tests.

#### Example

```
# Published versions in registry
canary --webpack=2.2 --dependency=raw-loader

# Development versions in remote repositories
canary --webpack=webpack/webpack#master --dependency=https://github.com/alistairjcbrown/raw-loader/
```

<h2 align="center">Compatibility</h2>

If you want to check examples, the dependency should include an directory (defined in the `example-dir` option) which contains an example setup with corresponding webpack config (ie. must have a `webpack.config.js` file). This config is run with the installed webpack version to confirm compatibility. If a custom command needs to be run, there should be an accompanying `README.md` file which contains the command in a codeblock.

### Readme file

The readme can also contain any other content that would usually be in the file. If there are multiple code blocks, only the first one will be used.

    # A title

    Some content

    ```npm run example```

    Some other content

    ```command that will be ignored```

The command can also contain some placeholders. Right now, only `<insert local ip>` is supported (will be replaced with `127.0.0.1`).

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
        src="https://avatars3.githubusercontent.com/u/480290?v=3&s=150">
        </br>
        <a href="https://github.com/darkokukovec">Darko Kukovec</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/1520965?v=3&s=150">
        </br>
        <a href="https://github.com/andreicek">Andrei Zvonimir Crnkovic</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">
        </br>
        <a href="https://github.com/TheLarkInn">Sean Larkin</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">
        </br>
        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>
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
