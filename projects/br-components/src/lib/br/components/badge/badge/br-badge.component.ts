import { Component, Inject, Input } from '@angular/core'
import { BrLibConfig } from '../../../br-lib.config'
import { BR_LIB_CONFIG } from '../../../br-lib.config.token'
import { Theme } from '../../../theme'
import { BadgeBorder } from '../models/badge-border'
import { BadgeSize } from '../models/badge-size'
import { BadgeType } from '../models/badge-type'

@Component({
    selector: 'br-badge',
    templateUrl: './br-badge.component.html',
    styleUrls: ['./br-badge.component.scss'],
})
export class BrBadgeComponent {
    @Input()
    border: BadgeBorder = 'none'

    @Input()
    count?: number

    @Input()
    size: BadgeSize = 'medium'

    @Input()
    type: BadgeType = 'default'

    theme: Theme

    constructor(@Inject(BR_LIB_CONFIG) private brLibConfig: BrLibConfig) {
        this.theme = brLibConfig?.theme ?? Theme.br
    }
}
