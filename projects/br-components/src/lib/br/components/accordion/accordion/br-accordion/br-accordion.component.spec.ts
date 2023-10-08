import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { BrLibModule } from '../../../../br-lib.module'
import { BrAccordionModule } from '../../br-accordion.module'
import { BrAccordionComponent } from './br-accordion.component'

describe('BrAccordionComponent', () => {
    let component: BrAccordionComponent
    let fixture: ComponentFixture<BrAccordionComponent>

    function hasTitle(element: DebugElement, str: string): boolean {
        return element.nativeElement.textContent?.trim() === str
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AngularSvgIconModule.forRoot(),
                BrLibModule.forRoot(),
                BrAccordionModule,
                BrowserAnimationsModule,
            ],
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

    it('should hava class br', () => {
        const el = fixture.debugElement.query(By.css('.br-accordion'))
        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).toContain('br')
    })

    it('should hava class br-accordion', () => {
        const el = fixture.debugElement.query(By.css('.br-accordion'))
        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).toContain('br-accordion')
    })

    it('should hava class br-accordion_white if contentBackgroundColor is White', () => {
        const instance = fixture.componentInstance
        const el = fixture.debugElement.query(By.css('.br-accordion'))

        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).not.toContain('br-accordion_white')

        instance.title = 'Accordion Title'
        instance.contentBackgroundColor = 'White'
        fixture.detectChanges()

        expect(el.nativeElement.classList).toContain('br-accordion_white')
    })

    it("should have title 'Accordion Title' if title is 'Accordion Title'", () => {
        const instance = fixture.componentInstance
        const el = fixture.debugElement.query(By.css('.br-accordion'))

        const expectedTitle = 'Accordion Title'
        instance.title = expectedTitle
        fixture.detectChanges()

        const accordionHeadElement = el.query(
            By.css('.br-accordion .br-accordion__head'),
        )

        expect(hasTitle(accordionHeadElement, expectedTitle)).toBeTruthy()
    })
})
