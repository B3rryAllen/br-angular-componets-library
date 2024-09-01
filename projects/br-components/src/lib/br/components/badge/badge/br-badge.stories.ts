import { moduleMetadata } from '@storybook/angular';
import { BrBadgeModule } from '../br-badge.module';
import { BadgeBorder } from '../models/badge-border';
import { BadgeSize } from '../models/badge-size';
import { BadgeType } from '../models/badge-type';
import { BrBadgeComponent } from './br-badge.component';

export default {
    argTypes: {
        border: {
            control: {
                options: ['None', 'Border'],
                type: 'inline-radio',
            },
        },
        size: {
            control: {
                options: ['Small', 'Medium'],
                type: 'inline-radio',
            },
        },
        type: {
            control: {
                options: ['Primary', 'Secondary', 'Error', 'Default'],
                type: 'inline-radio',
            },
        },
    },
    component: BrBadgeComponent,
    decorators: [
        moduleMetadata({
            imports: [BrBadgeModule],
        }),
    ],
    title: 'Components / Badge',
};

type InputArgs = {
    border?: BadgeBorder;
    count: number;
    size?: BadgeSize;
    type?: BadgeType;
};

type BadgeGroupStory = ((args: InputArgs) => unknown) & { args?: InputArgs };

export const Default: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count"></br-badge>`,
});

Default.args = {
    count: 1,
};

export const Basic: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
});

Basic.args = {
    count: 1,
    size: 'Medium',
    type: 'Default',
};

export const BasicCaTheme: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-badge [count]="count" [type]="type" [size]="size"></br-badge></div>`,
});

BasicCaTheme.args = {
    count: 1,
    size: 'Medium',
    type: 'Default',
};

export const Primary: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
});

Primary.args = {
    count: 1,
    size: 'Medium',
    type: 'Primary',
};

export const PrimaryCaTheme: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-badge [count]="count" [type]="type" [size]="size"></br-badge></div>`,
});

PrimaryCaTheme.args = {
    count: 1,
    size: 'Medium',
    type: 'Primary',
};

export const Secondary: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
});

Secondary.args = {
    count: 1,
    size: 'Medium',
    type: 'Secondary',
};

export const SecondaryCaTheme: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-badge [count]="count" [type]="type" [size]="size"></br-badge></div>`,
});

SecondaryCaTheme.args = {
    count: 1,
    size: 'Medium',
    type: 'Secondary',
};

export const Error: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
});

Error.args = {
    count: 1,
    size: 'Medium',
    type: 'Error',
};

export const ErrorMediumWithBorder: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size" [border]="border"></br-badge>`,
});

ErrorMediumWithBorder.args = {
    border: 'Border',
    count: 1,
    size: 'Medium',
    type: 'Error',
};

export const ErrorSmallWithBorder: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size" [border]="border"></br-badge>`,
});

ErrorSmallWithBorder.args = {
    border: 'Border',
    count: 1,
    size: 'Small',
    type: 'Error',
};

export const Medium: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
});

Medium.args = {
    count: 13,
    size: 'Medium',
    type: 'Default',
};

export const Small: BadgeGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-badge [count]="count" [type]="type" [size]="size"></br-badge>`,
});

Small.args = {
    count: 13,
    size: 'Small',
    type: 'Default',
};
