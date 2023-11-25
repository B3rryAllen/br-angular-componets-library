import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrBadgeComponent } from './badge/br-badge.component';

@NgModule({
    declarations: [BrBadgeComponent],
    imports: [CommonModule],
    exports: [BrBadgeComponent],
})
export class BrBadgeModule {}
