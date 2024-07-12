import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { BrLibModule } from '../../../br-lib.module';
import { BrScrollerModule } from '../br-scroller.module';
import { BrHorizontalScrollerStyle } from '../models/br-horizontal-scroller-style';

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
    title: 'Components / Scroller / Horizontal Scroller',
};

type InputArgs = {
    brStyle?: BrHorizontalScrollerStyle;
};

type NewsGroupStory = ((args: InputArgs) => unknown) & { args?: InputArgs };
export const Default: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `
            <div style="margin: 32px; ">
                <br-horizontal-scroller [brStyle]="brStyle">
                    <div style="background-color: white; display: flex; flex-direction: row; width: 1000px">
                      <div style="width: 100px">Row 1</div>
                      <div style="width: 100px">Row 2</div>
                      <div style="width: 100px">Row 3</div>
                      <div style="width: 100px">Row 4</div>
                      <div style="width: 100px">Row 5</div>
                      <div style="width: 100px">Row 6</div>
                      <div style="width: 100px">Row 7</div>
                      <div style="width: 100px">Row 8</div>
                      <div style="width: 100px">Row 9</div>
                      <div style="width: 100px">Row 10</div>
                    </div>
                </br-horizontal-scroller>
            </div>`,
});

Default.args = {
    brStyle: { 'max-width': '620px' },
};
