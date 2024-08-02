import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { BrLibModule } from '../../../br-lib.module';
import { BrButtonComponent } from './br-button.component';
import { BrButtonModule } from '../br-button.module';
import { BrIconsModule } from '../../icons/br-icons.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonType } from '../models/button-type';
import { ButtonSize } from '../models/button-size';
import { ButtonWidth } from '../models/button-width';

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
            options: ['micro', 'small', 'medium', 'large'],
            table: {
                defaultValue: { summary: 'medium' },
            },
            description: 'Height of the button',
        },
        width: {
            type: 'radio',
            options: ['auto', 'full'],
            table: {
                defaultValue: { summary: 'auto' },
            },
            description: 'Width of the button',
        },
    },
    component: BrButtonComponent,
    decorators: [
        applicationConfig({
            providers: [
                importProvidersFrom([
                    BrLibModule.forRoot({ theme: 'ca' }),
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
};

type ButtonStory = ((args: InputArgs) => unknown) & { args?: InputArgs };

export const CaBasic: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label"></br-button></div>`,
});

CaBasic.args = {
    label: "I'm a button",
};

export const CaTypeSecondary: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [buttonType]="type"></br-button></div>`,
});

CaTypeSecondary.args = {
    label: "I'm a secondary button",
    type: ButtonType.Secondary,
};

export const CaTypeTransparent: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [buttonType]="type"></br-button></div>`,
});

CaTypeTransparent.args = {
    label: "I'm a transparent button",
    type: ButtonType.Transparent,
};

export const CaTypeLink: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [buttonType]="type"></br-button></div>`,
});

CaTypeLink.args = {
    label: "I'm a link button",
    type: ButtonType.Link,
};

export const CaHeightLarge: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [height]="height"></br-button></div>`,
});

CaHeightLarge.args = {
    label: "I'm a large button",
    height: ButtonSize.Large,
};

export const CaHeightMedium: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [height]="height"></br-button></div>`,
});

CaHeightMedium.args = {
    label: "I'm a medium button",
    height: ButtonSize.Medium,
};

export const CaHeightSmall: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [height]="height"></br-button></div>`,
});

CaHeightSmall.args = {
    label: "I'm a small button",
    height: ButtonSize.Small,
};

export const CaHeightMicro: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [height]="height"></br-button></div>`,
});

CaHeightMicro.args = {
    label: "I'm a micro button",
    height: ButtonSize.Micro,
};

export const CaWidthFull: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [width]="width"></br-button></div>`,
});

CaWidthFull.args = {
    label: "I'm a full button",
    width: ButtonWidth.Full,
};

export const CaWidthAuto: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-button [label]="label" [width]="width"></br-button></div>`,
});

CaWidthAuto.args = {
    label: "I'm a full button",
    width: ButtonWidth.Auto,
};

export const CaPrimaryWithCount: ButtonStory = (args: InputArgs) => ({
    template: `<div class="ca"><br-button [label]="label" [count]="count"></br-button></div>`,
    props: {
        ...args,
    },
});

CaPrimaryWithCount.args = {
    count: 1,
    label: "I'm a button with count",
};

export const CaPrimaryWithIcon: ButtonStory = (args: InputArgs) => ({
    template: `<div class="ca"><br-button [label]="label">
          <br-icon name="chevronDown"></br-icon>
        </br-button></div>`,
    props: {
        ...args,
    },
});

CaPrimaryWithIcon.args = {
    count: 1,
    label: "I'm a button with icon",
};
