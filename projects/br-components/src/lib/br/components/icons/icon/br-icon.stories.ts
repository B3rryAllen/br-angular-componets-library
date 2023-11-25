import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { iconNames } from '../br-icon-provider';
import { BrIconsModule } from '../br-icons.module';
import { importProvidersFrom } from '@angular/core';

export default {
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
            imports: [BrIconsModule],
        }),
    ],
    title: 'Components / Icon',
};

type InputArgs = {
    name?: unknown;
};

type IconStory = ((args: InputArgs) => unknown) & { args?: InputArgs };

export const Default: IconStory = args => ({
    props: args,
    template: `<br-icon [name]="name"></br-icon>`,
});

Default.args = {
    name: iconNames[0],
};

export const Small: IconStory = args => ({
    props: args,
    template: `<br-icon size="small" [name]="name"></br-icon>`,
});

Small.args = {
    name: iconNames[0],
};

export const Medium: IconStory = args => ({
    props: args,
    template: `<br-icon size="medium" [name]="name"></br-icon>`,
});

Medium.args = {
    name: iconNames[0],
};
export const Large: IconStory = args => ({
    props: args,
    template: `<br-icon size="large" [name]="name"></br-icon>`,
});

Large.args = {
    name: iconNames[0],
};
