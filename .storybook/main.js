module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  core: {
    builder: 'webpack5',
  },
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  staticDirs: [
    { from: '../assets', to: '/assets' },
    { from: '../dist', to: '/dist' },
    { from: './drupal', to: '/drupal' },
  ],
  docs: {
    autodocs: true,
  },
};
