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
        },
        label: {
            type: 'string',
        },
        type: {
            type: 'radio',
            options: ['Primary', 'Secondary', 'Transparent', 'Link'],
        },
        height: {
            type: 'radio',
            options: ['micro', 'small', 'medium', 'large'],
        },
        width: {
            type: 'radio',
            options: ['auto', 'full'],
        },
    },
    component: BrButtonComponent,
    decorators: [
        applicationConfig({
            providers: [
                importProvidersFrom([
                    BrLibModule.forRoot(),
                    AngularSvgIconModule.forRoot(),
                    BrIconsModule,
                ]),
            ],
        }),
        moduleMetadata({
            imports: [BrButtonModule, BrIconsModule, AngularSvgIconModule],
        }),
    ],
    title: 'Components / Button',
};

type InputArgs = {
    label: string;
    count?: number;
    type?: ButtonType;
    height?: ButtonSize;
    width?: ButtonWidth;
};

type ButtonStory = ((args: InputArgs) => unknown) & { args?: InputArgs };

export const Default: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button
                  [label]="label"
                  [count]="count"
                  [buttonType]="type"
                  [height]="height"
                  [width]="width"></br-button>`,
});

Default.args = {
    label: "I'm a button",
    count: 1,
    type: ButtonType.Primary,
    height: ButtonSize.Medium,
    width: ButtonWidth.Auto,
};

export const Basic: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label"></br-button>`,
});

Basic.args = {
    label: "I'm a button",
};

export const TypeSecondary: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [buttonType]="type"></br-button>`,
});

TypeSecondary.args = {
    label: "I'm a secondary button",
    type: ButtonType.Secondary,
};

export const TypeTransparent: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [buttonType]="type"></br-button>`,
});

TypeTransparent.args = {
    label: "I'm a transparent button",
    type: ButtonType.Transparent,
};

export const TypeLink: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [buttonType]="type"></br-button>`,
});

TypeLink.args = {
    label: "I'm a link button",
    type: ButtonType.Link,
};

export const HeightLarge: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [height]="height"></br-button>`,
});

HeightLarge.args = {
    label: "I'm a large button",
    height: ButtonSize.Large,
};

export const HeightMedium: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [height]="height"></br-button>`,
});

HeightMedium.args = {
    label: "I'm a medium button",
    height: ButtonSize.Medium,
};

export const HeightSmall: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [height]="height"></br-button>`,
});

HeightSmall.args = {
    label: "I'm a small button",
    height: ButtonSize.Small,
};

export const HeightMicro: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [height]="height"></br-button>`,
});

HeightMicro.args = {
    label: "I'm a micro button",
    height: ButtonSize.Micro,
};

export const WidthFull: ButtonStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-button [label]="label" [width]="width"></br-button>`,
});

WidthFull.args = {
    label: "I'm a full button",
    width: ButtonWidth.Full,
};

export const PrimaryWithCount: ButtonStory = (args: InputArgs) => ({
    component: BrButtonComponent,
    props: {
        ...args,
    },
});

PrimaryWithCount.args = {
    count: 1,
    label: "I'm a button with count",
};

export const PrimaryWithIcon: ButtonStory = (args: InputArgs) => ({
    template: `<br-button [label]="label">
          <br-icon name="chevronDown"></br-icon>
        </br-button>`,
    props: {
        ...args,
    },
});

PrimaryWithIcon.args = {
    count: 1,
    label: "I'm a button with icon",
};
