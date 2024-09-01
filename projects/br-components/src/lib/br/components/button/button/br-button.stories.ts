import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { BrButtonComponent } from './br-button.component';
import { BrButtonModule } from '../br-button.module';
import { BrIconsModule } from '../../icons/br-icons.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonType } from '../models/button-type';
import { ButtonSize } from '../models/button-size';
import { ButtonWidth } from '../models/button-width';
import { fn } from '@storybook/test';

export default {
    argTypes: {
        count: {
            type: 'number',
            description: 'Number written after or before button label',
        },
        label: {
            type: 'string',
            description: 'Button label',
        },
        type: {
            type: 'select',
            description: 'Type of button',
            options: ['Primary', 'Secondary', 'Transparent', 'Link'],
            table: {
                defaultValue: { summary: 'Primary' },
            },
        },
        height: {
            type: 'radio',
            description: 'Button height',
            options: ['Micro', 'Small', 'Medium', 'Large'],
            table: {
                defaultValue: { summary: 'Medium' },
            },
        },
        width: {
            type: 'radio',
            options: ['Auto', 'Full'],
            table: {
                defaultValue: { summary: 'Auto' },
            },
        },
        press: {
            action: 'press',
            description: 'Button press event',
        },
    },
    args: {
        type: 'Primary',
        height: 'medium',
        width: 'auto',
    },
    component: BrButtonComponent,
    decorators: [
        applicationConfig({
            providers: [
                importProvidersFrom([
                    AngularSvgIconModule.forRoot(),
                    BrIconsModule,
                ]),
            ],
        }),
        moduleMetadata({
            imports: [BrButtonModule, BrIconsModule, AngularSvgIconModule],
        }),
    ],
    title: 'Components / Buttons / Button',
};

type InputArgs = {
    label: string;
    count?: number;
    type?: ButtonType;
    height?: ButtonSize;
    width?: ButtonWidth;
    press?: () => void;
};

type ButtonStory = ((args: InputArgs) => unknown) & { args?: InputArgs };

export const Basic: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" (press)="press($event)"></br-button>`,
});

Basic.args = {
    label: "I'm a button",
    press: fn(),
};

export const TypeSecondary: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [buttonType]="type" (press)="press($event)"></br-button>`,
});

TypeSecondary.args = {
    label: "I'm a secondary button",
    type: ButtonType.Secondary,
    press: fn(),
};

export const TypeTransparent: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [buttonType]="type" (press)="press($event)"></br-button>`,
});

TypeTransparent.args = {
    label: "I'm a transparent button",
    type: ButtonType.Transparent,
    press: fn(),
};

export const TypeLink: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [buttonType]="type" (press)="press($event)"></br-button>`,
});

TypeLink.args = {
    label: "I'm a link button",
    type: ButtonType.Link,
    press: fn(),
};

export const HeightLarge: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [height]="height" (press)="press($event)"></br-button>`,
});

HeightLarge.args = {
    label: "I'm a large button",
    height: ButtonSize.Large,
    press: fn(),
};

export const HeightMedium: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [height]="height" (press)="press($event)"></br-button>`,
});

HeightMedium.args = {
    label: "I'm a medium button",
    height: ButtonSize.Medium,
    press: fn(),
};

export const HeightSmall: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [height]="height" (press)="press($event)"></br-button>`,
});

HeightSmall.args = {
    label: "I'm a small button",
    height: ButtonSize.Small,
    press: fn(),
};

export const HeightMicro: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [height]="height" (press)="press($event)"></br-button>`,
});

HeightMicro.args = {
    label: "I'm a micro button",
    height: ButtonSize.Micro,
    press: fn(),
};

export const WidthFull: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [width]="width" (press)="press($event)"></br-button>`,
});

WidthFull.args = {
    label: "I'm a full button",
    width: ButtonWidth.Full,
    press: fn(),
};

export const WidthAuto: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [width]="width" (press)="press($event)"></br-button>`,
});

WidthAuto.args = {
    label: "I'm a full button",
    width: ButtonWidth.Auto,
    press: fn(),
};

export const PrimaryWithCount: ButtonStory = (args: InputArgs) => ({
    template: `<br-button [label]="label" [count]="count" (press)="press($event)"></br-button>`,
    props: {
        ...args,
    },
});

PrimaryWithCount.args = {
    count: 1,
    label: "I'm a button with count",
    press: fn(),
};

export const PrimaryWithIcon: ButtonStory = (args: InputArgs) => ({
    template: `<br-button [label]="label" (press)="press($event)">
          <br-icon name="chevronDown"></br-icon>
        </br-button>`,
    props: {
        ...args,
    },
});

PrimaryWithIcon.args = {
    count: 1,
    label: "I'm a button with icon",
    press: fn(),
};
