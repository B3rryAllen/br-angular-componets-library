module.exports = {
    stories: ['../projects/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-viewport',
        'storybook-mobile',
    ],

    framework: {
        name: '@storybook/angular',

        options: {
            enableIvy: false,
        },
    },

    docs: {
        autodocs: true,
    },
}
