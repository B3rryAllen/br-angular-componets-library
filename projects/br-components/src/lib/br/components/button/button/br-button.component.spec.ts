import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BrButtonComponent } from './br-button.component';
import { BrButtonModule } from '../br-button.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

describe('BrButtonComponent', () => {
    const buttonBaseClass = '.br-button';

    const label = 'Test Button';

    let component: BrButtonComponent;
    let fixture: ComponentFixture<BrButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                AngularSvgIconModule.forRoot(),
                BrButtonModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BrButtonComponent);
        component = fixture.componentInstance;
        component.label = label;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not throw an error when label is provided', () => {
        expect(() => {
            component.label = 'Test Button';
            fixture.detectChanges();
        }).not.toThrowError();
    });

    it('should have theme as br', () => {
        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        ).nativeElement;

        const newsStyles = getComputedStyle(buttonElement);

        expect(newsStyles.backgroundColor).toEqual('rgb(50, 0, 105)');
    });

    it('should display label when provided', () => {
        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(buttonElement.nativeElement.textContent).toContain(
            'Test Button'
        );
    });

    it('should have br-button_primary as default', () => {
        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(component.buttonType).toBe('Primary');
        expect(buttonElement.classes['br-button_primary']).toBeTruthy();
    });

    it("shouldn't contains icon", () => {
        const buttonIcontag = fixture.debugElement.query(
            By.css('.br-button__icon')
        );
        expect(buttonIcontag).toBeFalsy();
    });

    it('should have br-button_secondary class when type is secondary', () => {
        component.buttonType = 'Secondary';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(buttonElement.classes['br-button_secondary']).toBeTruthy();
    });

    it('should have br-button_transparent class when buttonType is transparent', () => {
        component.buttonType = 'Transparent';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(buttonElement.classes['br-button_transparent']).toBeTruthy();
    });

    it('should have br-button_link class when buttonType is link', () => {
        component.buttonType = 'Link';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(buttonElement.classes['br-button_link']).toBeTruthy();
    });

    it('should have br-button_size-medium as default', () => {
        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(component.height).toBe('medium');
        expect(buttonElement.classes['br-button_size-medium']).toBeTruthy();
    });

    it('should have br-button_size-micro class when height is micro', () => {
        component.height = 'micro';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(buttonElement.classes['br-button_size-micro']).toBeTruthy();
    });

    it('should have br-button_size-small class when height is small', () => {
        component.height = 'small';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(buttonElement.classes['br-button_size-small']).toBeTruthy();
    });

    it('should have br-button_size-large class when height is large', () => {
        component.height = 'large';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(buttonElement.classes['br-button_size-large']).toBeTruthy();
    });

    it('should have with auto as default value', () => {
        expect(component.width).toBe('auto');
    });

    it('should have br-button_width-full class when width is full', () => {
        component.width = 'full';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(buttonElement.classes['br-button_width-full']).toBeTruthy();
    });

    it('should disable button when disabled property is set to true', () => {
        component.disabled = true;
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(buttonElement.nativeElement.disabled).toBeTruthy();
    });

    it('should have class fd-button_disabled when button is disabled', () => {
        component.disabled = true;
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        expect(buttonElement.classes['fd-button_disabled']).toBeTruthy();
    });

    it('should emit press event when button is clicked', () => {
        spyOn(component.press, 'emit');

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        buttonElement.triggerEventHandler('click', null);

        expect(component.press.emit).toHaveBeenCalled();
    });

    it('should not emit press event when button is clicked but button is disabled', () => {
        spyOn(component.press, 'emit');
        component.disabled = true;
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(
            By.css(buttonBaseClass)
        );
        component.disabled = true;
        fixture.detectChanges();

        buttonElement.triggerEventHandler('press', null);
        expect(component.press.emit).not.toHaveBeenCalled();
    });

    it('should contain badge component when count is set', () => {
        component.count = 3;
        fixture.detectChanges();

        const badgeElement = fixture.debugElement.query(By.css('.br-badge'));
        expect(badgeElement).toBeTruthy();
        expect(
            badgeElement.query(By.css('.br-badge__content')).nativeElement
                .innerText
        ).toBe('3');
    });
});
