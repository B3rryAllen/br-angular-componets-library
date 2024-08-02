import {
    Component,
    ContentChild,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import { ButtonType } from '../models/button-type';
import { BrIconComponent } from '../../icons/icon/br-icon.component';
import { ButtonSize } from '../models/button-size';
import { ButtonWidth } from '../models/button-width';

@Component({
    selector: 'br-button',
    templateUrl: './br-button.component.html',
    styleUrls: ['./br-button.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BrButtonComponent implements OnInit {
    @Input({ required: true }) public label!: string;

    @Input()
    public buttonType = ButtonType.Primary;

    @Input()
    public count: number | undefined;

    @Input()
    public disabled = false;

    @Input()
    public height: ButtonSize = ButtonSize.Medium;

    @ContentChild(BrIconComponent)
    public icon: BrIconComponent | undefined;

    @Output()
    public press = new EventEmitter<void>();

    @Input()
    width: ButtonWidth = ButtonWidth.Auto;

    contentCount = 1;

    ngOnInit(): void {
        if (!this.label?.length) {
            throw new Error('Label is required');
        }

        if (this.count) {
            this.contentCount++;
        }

        if (this.icon) {
            this.contentCount++;
        }
    }

    onPressHandler() {
        if (!this.disabled) {
            this.press.emit();
        }
    }
}
