import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { brIconProvider } from './br-icon-provider';
import { BrIconComponent } from './icon/br-icon.component';

@NgModule({
    declarations: [BrIconComponent],
    exports: [BrIconComponent],
    imports: [AngularSvgIconModule, CommonModule, HttpClientModule],
    providers: [brIconProvider],
})
export class BrIconsModule {}
