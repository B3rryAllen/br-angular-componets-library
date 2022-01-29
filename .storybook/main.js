module.exports = {
    stories: [
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
        '../projects/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: 'webpack5',
    },
}
