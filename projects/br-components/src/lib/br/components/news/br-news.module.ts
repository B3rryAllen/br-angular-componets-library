import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrNewsCardComponent } from './news-card/br-news-card.component';

@NgModule({
    declarations: [BrNewsCardComponent],
    exports: [BrNewsCardComponent],
    imports: [CommonModule],
})
export class BrNewsModule {}
