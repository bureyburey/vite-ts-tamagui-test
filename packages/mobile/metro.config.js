// /**
//  * Metro configuration for React Native
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
//
// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };


/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// const { getDefaultConfig } = require('metro-config');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const extraNodeModules = {
};

const watchFolders = [
  path.resolve(`${projectRoot}/..`), // Relative path to packages directory
  path.resolve(`${projectRoot}/../../node_modules`), // Relative path to packages directory
];

module.exports = (async () => {
  // const config = await getDefaultConfig();

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true
        }
      })
    },
    resolver: {
      nodeModulesPaths: [
        path.resolve(projectRoot, 'node_modules'),
        path.resolve(workspaceRoot, 'node_modules')
      ],
      extraNodeModules,
      disableHierarchicalLookup: true
    },
    watchFolders
  };
})();
