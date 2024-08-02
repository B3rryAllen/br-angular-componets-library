import { Component, DebugElement, importProvidersFrom } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrAccordionComponent } from './br-accordion.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrIconsModule } from '../../../icons/br-icons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrAccordionModule } from '../../br-accordion.module';

@Component({
    template: `
        <div class="ca">
            <br-accordion title="Accordion title"
                >Accordion content</br-accordion
            >
        </div>
    `,
})
class TestHostComponent {}

describe('BrAccordionComponent with CA Theme', () => {
    const accordionHeadBaseClass = '.br-accordion__head';

    let hostFixture: ComponentFixture<TestHostComponent>;

    let brAccordionHeadFixture: DebugElement;
    let brAccordionComponent: BrAccordionComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrAccordionModule],
            declarations: [TestHostComponent],
            providers: [
                importProvidersFrom([
                    AccordionModule.forRoot(),
                    AngularSvgIconModule.forRoot(),
                    BrIconsModule,
                    BrowserAnimationsModule,
                ]),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        hostFixture = TestBed.createComponent(TestHostComponent);
        brAccordionHeadFixture = hostFixture.debugElement.query(
            By.css(accordionHeadBaseClass)
        );
        brAccordionComponent = brAccordionHeadFixture.componentInstance;

        hostFixture.detectChanges();
    });

    it('should create', () => {
        expect(brAccordionComponent).toBeTruthy();
    });

    it('br-accordion__head should have br theme color', () => {
        const newsStyles = getComputedStyle(
            brAccordionHeadFixture.nativeElement
        );

        expect(newsStyles.color).toEqual('rgb(0, 77, 54)');
    });
});
