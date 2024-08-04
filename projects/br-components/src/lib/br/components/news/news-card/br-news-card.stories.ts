import { moduleMetadata } from '@storybook/angular';
import { BrNewsModule } from '../br-news.module';
import { BrNewsCardComponent } from './br-news-card.component';
import { NewsType, newsTypeOptions } from '../models/news-type';
import { NewsSize, newsSizeOptions } from '../models/news-size';
import { NewsShape, newsShapeOptions } from '../models/news-shape';

export default {
    argTypes: {
        newsType: {
            type: 'radio',
            options: newsTypeOptions,
        },
        newsSize: {
            type: 'radio',
            options: newsSizeOptions,
        },
        newsShape: {
            type: 'radio',
            options: newsShapeOptions,
        },
    },
    component: BrNewsCardComponent,
    decorators: [
        moduleMetadata({
            imports: [BrNewsModule],
        }),
    ],
    title: 'Components / News',
};

type InputArgs = {
    newsType?: string;
    newsSize?: string;
    newsShape?: string;
};

type NewsGroupStory = ((args: InputArgs) => unknown) & { args?: InputArgs };
export const Default: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-news>I'm a news</br-news>`,
});

export const DefaultCaTheme: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<div class="ca"><br-news>I'm a news</br-news></div>`,
});

export const Basic: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `
                <br-news [newsType]="newsType"
                         [newsSize]="newsSize"
                         [newsShape]="newsShape"
                >I'm a news</br-news>`,
});

Basic.args = {
    newsType: NewsType.Info,
    newsSize: NewsSize.Medium,
    newsShape: NewsShape.Oval,
};

export const NewsErrorType: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-news [newsType]="newsType">I'm a news</br-news>`,
});

NewsErrorType.args = {
    newsType: NewsType.Error,
};

export const NewsSuccessType: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-news [newsType]="newsType">I'm a news</br-news>`,
});

NewsSuccessType.args = {
    newsType: NewsType.Success,
};

export const NewsWaitingType: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-news [newsType]="newsType">I'm a news</br-news>`,
});

NewsWaitingType.args = {
    newsType: NewsType.Waiting,
};

export const NewsWarningType: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-news [newsType]="newsType">I'm a news</br-news>`,
});

NewsWarningType.args = {
    newsType: NewsType.Warning,
};

export const NewsSizeSmall: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-news [newsSize]="newsSize">I'm a news</br-news>`,
});

NewsSizeSmall.args = {
    newsSize: NewsSize.Small,
};

export const NewsSizeLarge: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-news [newsSize]="newsSize">I'm a news</br-news>`,
});

NewsSizeLarge.args = {
    newsSize: NewsSize.Large,
};

export const NewsRectangle: NewsGroupStory = (args: InputArgs) => ({
    props: {
        ...args,
    },
    template: `<br-news [newsShape]="newsShape">I'm a news</br-news>`,
});

NewsRectangle.args = {
    newsShape: NewsShape.Rectangle,
};
