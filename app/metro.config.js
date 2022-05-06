/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require("path");
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");

module.exports = {
  projectRoot: __dirname,
  watchFolders: [path.resolve(__dirname, "..")],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
  },
};
