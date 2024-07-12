import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { BrLibModule } from '../../../br-lib.module';
import { BrScrollerModule } from '../br-scroller.module';

export default {
    argTypes: {},
    decorators: [
        applicationConfig({
            providers: [importProvidersFrom([BrLibModule.forRoot()])],
        }),
        moduleMetadata({
            imports: [BrScrollerModule],
        }),
    ],
    title: 'Components / Scroller / Vertical Scroller',
};

type InputArgs = {
    brStyle?: { [key in 'height']: string };
};

type NewsGroupStory = ((args: InputArgs) => unknown) & { args?: InputArgs };
export const Default: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `
            <div style="margin: 32px; ">
                <br-vertical-scroller [brStyle]="brStyle">
                    <div style="background-color: white">
                      <div>Row 1</div>
                      <div>Row 2</div>
                      <div>Row 3</div>
                      <div>Row 4</div>
                      <div>Row 5</div>
                      <div>Row 6</div>
                      <div>Row 7</div>
                      <div>Row 8</div>
                      <div>Row 9</div>
                      <div>Row 10</div>
                    </div>
                </br-vertical-scroller>
            </div>`,
});

Default.args = {
    brStyle: { height: '100px' },
};
