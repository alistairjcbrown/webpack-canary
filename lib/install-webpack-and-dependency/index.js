import childProcess from 'child_process';

import { ROOT_PATH } from '../consts';

/**
 * Get the commands that should be run
 *
 * @export
 * @param {InstallObject} webpackSetup - Webpack install object
 * @param {InstallObject} dependencySetup - Dependency install object
 * @param {string} packageManager - Package manager that should be used (npm or yarn)
 * @returns {Object} Install and install dependency commands
 */
const getCommands = function(webpackSetup, dependencySetup, packageManager) {
  if (packageManager === 'yarn') {
    return {
      install: `yarn add ${webpackSetup} ${dependencySetup}`,
      installDeps: 'yarn'
    };
  }

  return {
    install: `npm install ${webpackSetup} ${dependencySetup}`,
    installDeps: 'npm install'
  };
}

/**
 * Installs the Webpack and dependency modules
 *
 * @export
 * @param {InstallObject} webpackSetup - Webpack install object
 * @param {InstallObject} dependencySetup - Dependency install object
 * @param {string} packageManager - Package manager that should be used (npm or yarn)
 * @returns {Promise} A promise indicating the installation success
 */
export default function(webpackSetup, dependencySetup, packageManager) {
  const commands = getCommands(webpackSetup, dependencySetup, packageManager);

  return new Promise((resolve, reject) => {

    // IMPORTANT: ROOT_PATH needs to contain a package.json file
    // If it doesn't exist, npm will search for the closest package.json and install into this folder
    childProcess.exec(commands.install, { cwd: ROOT_PATH }, function(err, stdout, stderr) {
      if (err) {
        return reject(['Error calling install command', err]);
      }

      if (stderr) {
        return reject(['Error output when installing', stderr]);
      }

      if (stdout.indexOf(webpackSetup.toLocalName()) === -1 ||
          stdout.indexOf(dependencySetup.toLocalName()) === -1) {
        return reject(['Expected versions not in dependency tree', stdout]);
      }

      return childProcess.exec(commands.installDeps, { cwd: dependencySetup.installLocation }, (err) => {
        if (err) {
          return reject(['Error calling install command for dependency build', err]);
        }

        return resolve();
      });
    });
  });
}
