import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { NewsType } from '../models/news-type';
import { NewsSize } from '../models/news-size';
import { NewsShape } from '../models/news-shape';
import { BR_LIB_CONFIG } from '../../../br-lib.config.token';
import { Theme } from '../../../theme';

@Component({
    selector: 'br-news',
    templateUrl: './br-news-card.component.html',
    styleUrls: ['./br-news-card.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BrNewsCardComponent {
    @Input()
    newsType: NewsType = NewsType.Info;

    @Input()
    newsSize: NewsSize = NewsSize.Medium;

    @Input()
    newsShape: NewsShape = NewsShape.Oval;

    theme: Theme;

    constructor(
        @Inject(BR_LIB_CONFIG) private brLibConfig = { theme: Theme.br }
    ) {
        this.theme = brLibConfig.theme;
    }
}
