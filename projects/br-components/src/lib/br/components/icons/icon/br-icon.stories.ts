import { moduleMetadata } from '@storybook/angular'
import { iconNames } from '../br-icon-provider'
import { BrIconsModule } from '../br-icons.module'

export default {
    argTypes: {
        name: {
            control: {
                options: iconNames,
                type: 'select',
            },
            description: "Nome dell'icona da utilizzare",
            defaultValue: iconNames[0],
        },
        size: {
            control: {
                options: ['small', 'medium', 'large', 'full'],
                type: 'inline-radio',
            },
            description: "Dimensione dell'icona",
            default: 'full',
            defaultValue: 'full',
        },
    },
    decorators: [
        moduleMetadata({
            imports: [BrIconsModule],
        }),
    ],
    title: 'Components / Icon',
}

type InputArgs = {
    name?: unknown
}

type IconStory = ((args: InputArgs) => unknown) & { args?: InputArgs }

export const Default: IconStory = (args) => ({
    props: args,
    template: `<br-icon [name]="name"></br-icon>`,
})

export const Small: IconStory = (args) => ({
    props: args,
    template: `<br-icon size="small" [name]="name"></br-icon>`,
})

export const Medium: IconStory = (args) => ({
    props: args,
    template: `<br-icon size="medium" [name]="name"></br-icon>`,
})

export const Large: IconStory = (args) => ({
    props: args,
    template: `<br-icon size="large" [name]="name"></br-icon>`,
})