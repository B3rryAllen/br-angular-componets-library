import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IconNames } from '../br-icon-provider';

export type BrIconSize = 'small' | 'medium' | 'large' | 'full';

@Component({
  selector: 'br-icon',
  templateUrl: 'br-icon.component.html',
  styleUrls: ['./br-icon.component.scss'],
})
export class BrIconComponent {
    @Input() name?: IconNames;
    @Input() size: BrIconSize = 'full';
    @ViewChild('icon', { static: true }) templateRef?: TemplateRef<void>;
}
