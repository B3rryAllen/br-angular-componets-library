import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
    selector: 'br-accordion',
    templateUrl: './br-accordion.component.html',
    styleUrls: ['./br-accordion.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BrAccordionComponent {
    @Input()
    isOpen = false;

    @Input()
    title: string | undefined;

    @Input()
    contentBackgroundColor: 'Gray' | 'White' = 'Gray';

    @Output()
    isOpenChange = new EventEmitter<boolean>();

    constructor() {
        setTheme('bs5');
    }

    isOpenChangeHandler($event: boolean) {
        this.isOpenChange.emit($event);
    }
}
