import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { BrIconsModule } from '../icons/br-icons.module'
import { BrAccordionComponent } from './accordion/br-accordion/br-accordion.component'

@NgModule({
    declarations: [BrAccordionComponent],
    exports: [BrAccordionComponent],
    imports: [CommonModule, AccordionModule, BrIconsModule],
})
export class BrAccordionModule {}
