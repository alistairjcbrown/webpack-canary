import glob from 'glob-promise';
import { WEBPACK_CONFIG_FILENAME } from '../consts';
import { getDependencyExamples, getExampleDirectoryPaths } from './utils';

/**
 * Creates a promise with glob results of the example folder
 *
 * @param {any} examplePath - Path to the example folder
 * @returns {Promise} Glob results of the example folder
 */
function createExampleGlob(examplePath) {
  return glob(`**/${WEBPACK_CONFIG_FILENAME}`, { cwd: examplePath });
}

/**
 * Get a list of dependency examples
 *
 * @export
 * @param {InstallObject} webpackSetup - Webpack install object
 * @param {InstallObject} dependencySetup - Dependency install object
 * @param {Array} exampleDirs - Paths to example directories
 * @returns {Array} A list of dependency examples
 */
export default function (webpackSetup, dependencySetup, exampleDirs) {
  const exampleDirectoryPaths = getExampleDirectoryPaths(dependencySetup, exampleDirs);
  const exampleGlobs = exampleDirectoryPaths.map(createExampleGlob);

  return Promise.all(exampleGlobs)
    .then(getDependencyExamples(exampleDirectoryPaths));
}
