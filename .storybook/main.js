const path = require('path');

module.exports = {
    stories: ['../projects/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
        '@storybook/icons',
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
