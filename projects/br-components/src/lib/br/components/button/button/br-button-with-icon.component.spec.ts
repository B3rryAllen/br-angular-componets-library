import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrLibModule } from '../../../br-lib.module';
import { BrButtonModule } from '../br-button.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrIconsModule } from '../../icons/br-icons.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { chevronDownPath } from '../../icons/icon/br-icon.component.spec';

@Component({
    template: `
        <br-button label="Test button">
            <br-icon name="chevronDown"></br-icon
        ></br-button>
    `,
})
class TestButtonWithIconComponent {}

describe('BrButtonComponent with icon', () => {
    let component: TestButtonWithIconComponent;
    let fixture: ComponentFixture<TestButtonWithIconComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestButtonWithIconComponent],
            imports: [
                BrLibModule.forRoot(),
                BrButtonModule,
                BrIconsModule,
                AngularSvgIconModule.forRoot(),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestButtonWithIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contains icon', () => {
        const buttonIcontag = fixture.debugElement.query(
            By.css('.br-button__icon')
        );
        expect(buttonIcontag).toBeTruthy();
    });

    it('chevronDown is the icon', () => {
        const icon = fixture.debugElement.query(
            By.css('.br-button__icon .br-icon')
        );
        expect(icon.nativeElement.innerHTML).toContain(chevronDownPath);
    });
});
