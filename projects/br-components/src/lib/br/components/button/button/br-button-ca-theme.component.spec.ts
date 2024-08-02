import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BrButtonComponent } from './br-button.component';
import { BrButtonModule } from '../br-button.module';
import { Component, DebugElement, Input } from '@angular/core';

@Component({
    template: `
        <div class="ca">
            <br-button label="label"></br-button>
        </div>
    `,
})
class TestHostComponent {
    @Input({ required: true })
    public label!: string;
}

describe('BrButtonComponent with CA Theme', () => {
    const label = 'Test Button';

    let hostFixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;

    let brButtonFixture: DebugElement;
    let brButtonComponent: BrButtonComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrButtonModule],
            declarations: [TestHostComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        hostFixture = TestBed.createComponent(TestHostComponent);
        hostComponent = hostFixture.componentInstance;
        hostComponent.label = label;

        brButtonFixture = hostFixture.debugElement.query(By.css('.br-button'));
        brButtonComponent = brButtonFixture.componentInstance;

        hostFixture.detectChanges();
    });

    it('should create', () => {
        expect(brButtonComponent).toBeTruthy();
    });

    it('should hava color of ca theme', () => {
        const newsStyles = getComputedStyle(brButtonFixture.nativeElement);

        expect(newsStyles.backgroundColor).toEqual('rgb(0, 77, 54)');
    });
});
