import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrAccordionComponent } from './br-accordion.component'

xdescribe('BrAccordionComponent', () => {
    let component: BrAccordionComponent
    let fixture: ComponentFixture<BrAccordionComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BrAccordionComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(BrAccordionComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
