import {
    Component,
    ElementRef,
    Input,
    signal,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { BrScrollerStyle } from '../models/br-scroller-style';

@Component({
    selector: 'br-vertical-scroller',
    templateUrl: './br-vertical-scroller.component.html',
    styleUrls: ['./br-vertical-scroller.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BrVerticalScrollerComponent {
    @ViewChild('scrollableDiv') scrollableDiv: ElementRef | undefined;

    @Input()
    tabIndex = 0;

    isBottomGradientHidden = signal(false);

    isTopGradientHidden = signal(true);

    style?: BrScrollerStyle;

    @Input({ required: true })
    set brStyle(customStyle: BrScrollerStyle) {
        this.style = {
            ...this.style,
            ...customStyle,
        };
    }

    onScroll() {
        const container = this.scrollableDiv?.nativeElement;

        if (container) {
            this.isTopGradientHidden.set(container.scrollTop === 0);

            this.isBottomGradientHidden.set(
                container.scrollHeight - container.scrollTop ===
                    container.clientHeight
            );
        }
    }
}
