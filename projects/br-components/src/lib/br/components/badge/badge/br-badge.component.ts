import { Component, Input } from '@angular/core'
import { BadgeBorder } from '../models/badge-border'
import { BadgeSize } from '../models/badge-size'
import { BadgeType } from '../models/badge-type'

@Component({
    selector: 'br-badge',
    templateUrl: './br-badge.component.html',
    styleUrls: ['./br-badge.component.less'],
})
export class BrBadgeComponent {
    @Input()
    border: BadgeBorder = 'none'

    @Input()
    count: number

    @Input()
    size: BadgeSize = 'medium'

    @Input()
    type: BadgeType = 'default'
}
