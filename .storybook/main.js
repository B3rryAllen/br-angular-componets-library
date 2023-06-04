module.exports = {
    stories: ['../projects/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-viewport',
        'storybook-mobile',
    ],
    core: {
        builder: 'webpack5',
    },
}
