import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { first } from 'rxjs/operators';
import { BrAccordionModule } from '../../br-accordion.module';
import { BrAccordionComponent } from './br-accordion.component';

describe('BrAccordionComponent', () => {
    let component: BrAccordionComponent;
    let fixture: ComponentFixture<BrAccordionComponent>;

    function hasTitle(element: DebugElement, str: string): boolean {
        return element.nativeElement.textContent?.trim() === str;
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AngularSvgIconModule.forRoot(),
                BrAccordionModule,
                BrowserAnimationsModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BrAccordionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should hava class br-accordion', () => {
        const el = fixture.debugElement.query(By.css('.br-accordion'));
        expect(el).toBeTruthy();
        expect(el.nativeElement.classList).toContain('br-accordion');
    });

    it('br-accordion__head should have br theme color', () => {
        const el = fixture.debugElement.query(By.css('.br-accordion__head'));
        expect(el).toBeTruthy();

        const newsStyles = getComputedStyle(el.nativeElement);

        expect(newsStyles.color).toEqual('rgb(50, 0, 105)');
    });

    it('should hava isOpen false', () => {
        const instance = fixture.componentInstance;
        expect(instance.isOpen).toEqual(false);
    });

    it('should chevronDown hava class br-accordion__icon_open', () => {
        const instance = fixture.componentInstance;
        const el = fixture.debugElement.query(By.css('[name=chevronDown]'));

        expect(el).toBeTruthy();
        expect(el.nativeElement.classList).not.toContain(
            'br-accordion__icon_open'
        );

        instance.isOpen = true;
        fixture.detectChanges();

        expect(el.nativeElement.classList).toContain('br-accordion__icon_open');
    });

    it('should hava class br-accordion_white if contentBackgroundColor is White', () => {
        const instance = fixture.componentInstance;
        const el = fixture.debugElement.query(By.css('.br-accordion'));

        expect(el).toBeTruthy();
        expect(el.nativeElement.classList).not.toContain('br-accordion_white');

        instance.title = 'Accordion Title';
        instance.contentBackgroundColor = 'White';
        fixture.detectChanges();

        expect(el.nativeElement.classList).toContain('br-accordion_white');
    });

    it("should have title 'Accordion Title' if title is 'Accordion Title'", () => {
        const instance = fixture.componentInstance;
        const el = fixture.debugElement.query(By.css('.br-accordion'));

        const expectedTitle = 'Accordion Title';
        instance.title = expectedTitle;
        fixture.detectChanges();

        const accordionHeadElement = el.query(
            By.css('.br-accordion .br-accordion__head')
        );

        expect(hasTitle(accordionHeadElement, expectedTitle)).toBeTruthy();
    });

    it('should raise isOpenChange event when clicked (triggerEventHandler)', () => {
        const instance = fixture.componentInstance;
        const panelGroup = fixture.debugElement.query(
            By.css('.br-accordion .panel-group .panel')
        );

        let isPanelOpened: boolean | undefined;
        instance.isOpenChange.pipe(first()).subscribe(isOpen => {
            isPanelOpened = isOpen;
        });

        // panelGroup.nativeElement.dispatchEvent(new Event())
        panelGroup.triggerEventHandler('isOpenChange', true);
        fixture.detectChanges();

        expect(isPanelOpened).toBe(true);
    });
});
