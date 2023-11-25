import {
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { BR_LIB_CONFIG } from '../../../../br-lib.config.token';
import { Theme } from '../../../../theme';
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

    theme: Theme;

    constructor(
        @Inject(BR_LIB_CONFIG) private brLibConfig = { theme: Theme.br }
    ) {
        this.theme = brLibConfig.theme;
        setTheme('bs4');
    }

    isOpenChangeHandler($event: boolean) {
        this.isOpenChange.emit($event);
    }
}
