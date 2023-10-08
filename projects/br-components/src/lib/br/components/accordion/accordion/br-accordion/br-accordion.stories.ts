import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { moduleMetadata } from '@storybook/angular'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { BrLibModule } from '../../../../br-lib.module'
import { BrAccordionModule } from '../../br-accordion.module'

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
        moduleMetadata({
            imports: [
                BrLibModule.forRoot(),
                AccordionModule.forRoot(),
                AngularSvgIconModule.forRoot(),
                BrAccordionModule,
                BrowserAnimationsModule,
            ],
        }),
    ],
    title: 'Components / Accordion',
}

const commonArgs = {
    title: 'Divisioni aziendali',
}

export const Basic = () => ({
    template: `
              <br-accordion [title]="title">
                <span style="text-align: center">Contenuto</span>
              </br-accordion>`,
    props: {
        ...commonArgs,
    },
})

export const BackgroundColorWhite = () => ({
    template: `
              <br-accordion [title]="title" contentBackgroundColor="White">
                <span style="text-align: center">Contenuto</span>
              </br-accordion>`,
    props: {
        ...commonArgs,
    },
})
