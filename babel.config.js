
module.exports = (api) => {
    api.cache(true);
  
    return {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              browsers: 'Last 2 Chrome versions, Firefox ESR',
              node: 'current',
            },
          },
        ],
        [
          '@babel/preset-react',
          {
            development: process.env.BABEL_ENV !== 'build',
          },
        ],
        '@babel/preset-typescript',
      ],
      "plugins": ["@babel/plugin-transform-modules-commonjs","babel-plugin-styled-components"],
      env: {
        build: {
          ignore: [
            '**/*.test.tsx',
            '**/*.test.ts',
            '**/*.story.tsx',
            '__snapshots__',
            '__tests__',
            '__stories__',
          ],
        },
      },
      ignore: ['node_modules'],
    };
  };