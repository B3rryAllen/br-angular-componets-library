import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrVerticalScrollerComponent } from './vertical-scroller/br-vertical-scroller.component';
import { BrHorizontalScrollerComponent } from './horizontal-scroller/br-horizontal-scroller.component';

@NgModule({
    declarations: [BrHorizontalScrollerComponent, BrVerticalScrollerComponent],
    exports: [BrHorizontalScrollerComponent, BrVerticalScrollerComponent],
    imports: [CommonModule],
})
export class BrScrollerModule {}
