import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrLibModule } from '../../../../br-lib.module';
import { BrAccordionModule } from '../../br-accordion.module';
import { importProvidersFrom } from '@angular/core';
import { BrIconsModule } from '../../../icons/br-icons.module';

export default {
    argTypes: {
        title: {
            control: {
                type: 'string',
            },
            defaultValue: 'Divisioni aziendali',
        },
    },
    decorators: [
        applicationConfig({
            providers: [
                importProvidersFrom([
                    BrLibModule.forRoot(),
                    AccordionModule.forRoot(),
                    AngularSvgIconModule.forRoot(),
                    BrIconsModule,
                ]),
            ],
        }),
        moduleMetadata({
            imports: [BrAccordionModule, BrowserAnimationsModule],
        }),
    ],
    title: 'Components / Accordion',
};

const commonArgs = {
    title: 'Divisioni aziendali',
};

export const Basic = () => ({
    template: `
              <br-accordion [title]="title">
                <span style="text-align: center">Contenuto</span>
              </br-accordion>`,
    props: {
        ...commonArgs,
    },
});

export const WithBackgroundColorWhite = () => ({
    template: `
              <br-accordion [title]="title" contentBackgroundColor="White">
                <span style="text-align: center">Contenuto</span>
              </br-accordion>`,
    props: {
        ...commonArgs,
    },
});

export const Opened = () => ({
    template: `
              <br-accordion [title]="title" [isOpen]="true">
                <span style="text-align: center">Contenuto</span>
              </br-accordion>`,
    props: {
        ...commonArgs,
    },
});
