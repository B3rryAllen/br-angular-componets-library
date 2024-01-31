import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrButtonComponent } from './button/br-button.component';
import { BrBadgeModule } from '../badge/br-badge.module';

@NgModule({
    declarations: [BrButtonComponent],
    imports: [BrBadgeModule, CommonModule],
    exports: [BrButtonComponent],
})
export class BrButtonModule {}
