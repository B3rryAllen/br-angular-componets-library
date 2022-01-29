import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { BrIconComponent } from './icon/br-icon.component'
import { brIconProvider } from './br-icon-provider'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [BrIconComponent],
    exports: [BrIconComponent],
    entryComponents: [BrIconComponent],
    imports: [CommonModule, AngularSvgIconModule.forRoot(), HttpClientModule],
    providers: [brIconProvider],
})
export class BrIconsModule {}
