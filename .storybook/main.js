const path = require('path');

module.exports = {
    stories: ['../projects/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
        '@storybook/icons',
        'storybook-mobile-addon',
        '@chromatic-com/storybook'
    ],

    framework: {
        name: '@storybook/angular',

        options: {
            enableIvy: false,
        },
    },

    docs: {},

    async webpackFinal(config) {
        config.module.rules.push(
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../projects/br-components/src/styles'),
            },
        );

        return config;
    },
}
