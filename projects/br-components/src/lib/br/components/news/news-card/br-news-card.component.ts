import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NewsType } from '../models/news-type';
import { NewsSize } from '../models/news-size';
import { NewsShape } from '../models/news-shape';

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
}
