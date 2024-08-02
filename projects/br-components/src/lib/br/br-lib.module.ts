import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrAccordionModule } from './components/accordion/br-accordion.module';
import { BrBadgeModule } from './components/badge/br-badge.module';
import { BrIconsModule } from './components/icons/br-icons.module';
import { BrScrollerModule } from './components/scroller';

@NgModule({
    imports: [
        BrAccordionModule,
        BrBadgeModule,
        BrIconsModule,
        BrowserAnimationsModule,
        BrScrollerModule,
        CommonModule,
    ],
})
export class BrLibModule {}
