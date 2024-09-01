import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
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
            description: 'A number to display in the button',
        },
        label: {
            description: 'The button label',
            type: 'string',
        },
        type: {
            type: 'radio',
            options: ['Primary', 'Secondary', 'Transparent', 'Link'],
            table: {
                defaultValue: { summary: 'Primary' },
            },
            description: 'Type of the button',
        },
        height: {
            type: 'radio',
            options: ['Micro', 'Small', 'Medium', 'Large'],
            table: {
                defaultValue: { summary: 'Medium' },
            },
            description: 'Height of the button',
        },
        width: {
            type: 'radio',
            options: ['Auto', 'Full'],
            table: {
                defaultValue: { summary: 'Auto' },
            },
            description: 'Width of the button',
        },
        press: {
            action: 'press',
            description: 'Button press event',
        },
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
    title: 'Components / Buttons / Button Ca Theme',
};

type InputArgs = {
    label: string;
    count?: number;
    type?: ButtonType;
    height?: ButtonSize;
    width?: ButtonWidth;
    press?: () => void;
};

type ButtonStory = Meta<InputArgs>;

export const CaBasic: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" (press)="press($event)"></br-button></div>`,
});

CaBasic.args = {
    label: "I'm a button",
    press: fn(),
};

export const CaTypeSecondary: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [buttonType]="type" (press)="press($event)"></br-button></div>`,
});

CaTypeSecondary.args = {
    label: "I'm a secondary button",
    type: ButtonType.Secondary,
    press: fn(),
};

export const CaTypeTransparent: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [buttonType]="type" (press)="press($event)"></br-button></div>`,
});

CaTypeTransparent.args = {
    label: "I'm a transparent button",
    type: ButtonType.Transparent,
    press: fn(),
};

export const CaTypeLink: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [buttonType]="type" (press)="press($event)"></br-button></div>`,
});

CaTypeLink.args = {
    label: "I'm a link button",
    type: ButtonType.Link,
    press: fn(),
};

export const CaHeightLarge: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [height]="height" (press)="press($event)"></br-button></div>`,
});

CaHeightLarge.args = {
    label: "I'm a large button",
    height: ButtonSize.Large,
    press: fn(),
};

export const CaHeightMedium: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [height]="height" (press)="press($event)"></br-button></div>`,
});

CaHeightMedium.args = {
    label: "I'm a medium button",
    height: ButtonSize.Medium,
    press: fn(),
};

export const CaHeightSmall: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [height]="height" (press)="press($event)"></br-button></div>`,
});

CaHeightSmall.args = {
    label: "I'm a small button",
    height: ButtonSize.Small,
    press: fn(),
};

export const CaHeightMicro: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [height]="height" (press)="press($event)"></br-button></div>`,
});

CaHeightMicro.args = {
    label: "I'm a micro button",
    height: ButtonSize.Micro,
    press: fn(),
};

export const CaWidthFull: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [width]="width" (press)="press($event)"></br-button></div>`,
});

CaWidthFull.args = {
    label: "I'm a full button",
    width: ButtonWidth.Full,
    press: fn(),
};

export const CaWidthAuto: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [width]="width" (press)="press($event)"></br-button></div>`,
});

CaWidthAuto.args = {
    label: "I'm a full button",
    width: ButtonWidth.Auto,
    press: fn(),
};

export const CaPrimaryWithCount: ButtonStory = (args: InputArgs) => ({
    template: `<div class="ca"><br-button [label]="label" [count]="count" (press)="press($event)"></br-button></div>`,
    props: {
        ...args,
    },
});

CaPrimaryWithCount.args = {
    count: 1,
    label: "I'm a button with count",
    press: fn(),
};

export const CaPrimaryWithIcon: ButtonStory = (args: InputArgs) => ({
    template: `<div class="ca"><br-button [label]="label" (press)="press($event)">
          <br-icon name="chevronDown"></br-icon>
        </br-button></div>`,
    props: {
        ...args,
    },
});

CaPrimaryWithIcon.args = {
    count: 1,
    label: "I'm a button with icon",
    press: fn(),
};
