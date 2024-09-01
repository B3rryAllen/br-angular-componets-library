import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BadgeBorder } from '../models/badge-border';
import { BadgeSize } from '../models/badge-size';
import { BadgeType } from '../models/badge-type';

@Component({
    selector: 'br-badge',
    templateUrl: './br-badge.component.html',
    styleUrls: ['./br-badge.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BrBadgeComponent {
    @Input()
    border: BadgeBorder = BadgeBorder.None;

    @Input()
    count?: number;

    @Input()
    size: BadgeSize = BadgeSize.Medium;

    @Input()
    type: BadgeType = BadgeType.Default;
}
