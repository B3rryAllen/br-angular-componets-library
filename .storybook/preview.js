import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../dist/storybook/documentation.json";

setCompodocJson(docJson)

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: { inlineStories: true },
    backgrounds: {
        default: 'Berry',
        values: [
            {
                name: 'Dark',
                value: '#000000',
            },
            {
                name: 'Light',
                value: '#FFFFFF',
            },
            {
                name: 'Berry',
                value: '#C0C0C0',
            },
        ],
    },
}
