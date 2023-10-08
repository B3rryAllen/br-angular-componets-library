import { moduleMetadata } from '@storybook/angular'
import { BrLibModule } from '../../../br-lib.module'
import { BrBadgeModule } from '../br-badge.module'
import { BadgeBorder } from '../models/badge-border'
import { BadgeSize } from '../models/badge-size'
import { BadgeType } from '../models/badge-type'
import { BrBadgeComponent } from './br-badge.component'

export default {
    argTypes: {
        border: {
            control: {
                options: ['none', 'border'],
                type: 'inline-radio',
            },
        },
        size: {
            control: {
                options: ['small', 'medium'],
                type: 'inline-radio',
            },
        },
        type: {
            control: {
                options: ['primary', 'secondary', 'error', 'default'],
                type: 'inline-radio',
            },
        },
    },
    component: BrBadgeComponent,
    decorators: [
        moduleMetadata({
            imports: [BrLibModule.forRoot(), BrBadgeModule],
        }),
    ],
    title: 'Components / Badge',
}

type InputArgs = {
    border?: BadgeBorder
    count: number
    size?: BadgeSize
    type?: BadgeType
}

type BadgeGroupStory = ((args: InputArgs) => unknown) & { args?: InputArgs }

export const Basic: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
})

Basic.args = {
    count: 1,
    size: 'medium',
    type: 'default',
}

export const Default: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count"></br-badge>`,
})

Default.args = {
    count: 1,
}

export const Primary: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="fd"><br-badge [count]="count" [type]="type" [size]="size"></br-badge></div>`,
})

Primary.args = {
    count: 1,
    size: 'medium',
    type: 'primary',
}

export const Secondary: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
})

Secondary.args = {
    count: 1,
    size: 'medium',
    type: 'secondary',
}

export const Error: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
})

Error.args = {
    count: 1,
    size: 'medium',
    type: 'error',
}

export const ErrorMediumWithBorder: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size" [border]="border"></br-badge>`,
})

ErrorMediumWithBorder.args = {
    border: 'border',
    count: 1,
    size: 'medium',
    type: 'error',
}

export const ErrorSmallWithBorder: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size" [border]="border"></br-badge>`,
})

ErrorSmallWithBorder.args = {
    border: 'border',
    count: 1,
    size: 'small',
    type: 'error',
}

export const Medium: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
})

Medium.args = {
    count: 13,
    size: 'medium',
    type: 'default',
}

export const Small: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
})

Small.args = {
    count: 13,
    size: 'small',
    type: 'default',
}
