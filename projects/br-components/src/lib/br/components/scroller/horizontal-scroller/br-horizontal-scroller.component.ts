import {
    Component,
    ElementRef,
    Input,
    signal,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { BrHorizontalScrollerStyle } from '../models/br-horizontal-scroller-style';

@Component({
    selector: 'br-horizontal-scroller',
    templateUrl: './br-horizontal-scroller.component.html',
    styleUrls: ['./br-horizontal-scroller.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BrHorizontalScrollerComponent {
    @ViewChild('scrollableDiv') scrollableDiv: ElementRef | undefined;

    @Input()
    tabIndex = 0;

    isLeftGradientHidden = signal(true);

    isRightGradientHidden = signal(false);

    style?: BrHorizontalScrollerStyle;

    @Input({ required: true })
    set brStyle(customStyle: BrHorizontalScrollerStyle) {
        this.style = {
            ...this.style,
            ...customStyle,
        };
    }

    onScroll() {
        const container = this.scrollableDiv?.nativeElement;

        if (container) {
            this.isLeftGradientHidden.set(container.scrollLeft === 0);

            this.isRightGradientHidden.set(
                container.scrollWidth - container.scrollLeft ===
                    container.clientWidth
            );
        }
    }
}
