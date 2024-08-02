import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrBadgeComponent } from './br-badge.component';
import { Component, DebugElement, Input } from '@angular/core';
import { BrBadgeModule } from '../br-badge.module';
import { BadgeType } from '../models/badge-type';

@Component({
    template: `
        <div class="ca">
            <br-badge [count]="1" [type]="type"></br-badge>
        </div>
    `,
})
class TestHostComponent {
    @Input()
    type: BadgeType = 'default';
}

describe('BrBadgeComponent CA Theme', () => {
    const badgeBaseClass = '.br-badge';

    let hostFixture: ComponentFixture<TestHostComponent>;

    let brBadgeFixture: DebugElement;
    let brBadgeComponent: BrBadgeComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrBadgeModule],
            declarations: [TestHostComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        hostFixture = TestBed.createComponent(TestHostComponent);
        brBadgeFixture = hostFixture.debugElement.query(By.css(badgeBaseClass));
        brBadgeComponent = brBadgeFixture.componentInstance;

        hostFixture.detectChanges();
    });

    it('should create', () => {
        expect(brBadgeComponent).toBeTruthy();
    });

    it('should hava color of ca theme', () => {
        const newsStyles = getComputedStyle(brBadgeFixture.nativeElement);

        expect(newsStyles.backgroundColor).toEqual('rgb(18, 142, 146)');
    });

    it('should hava ca theme when type is primary', () => {
        const instance = hostFixture.componentInstance;

        const el = hostFixture.debugElement.query(By.css(badgeBaseClass));
        expect(el).toBeTruthy();

        instance.type = 'primary';
        hostFixture.detectChanges();

        const newsStyles = getComputedStyle(el.nativeElement);

        expect(newsStyles.backgroundColor).toEqual('rgb(12, 84, 82)');
    });

    it('should hava ca theme when type is secondary', () => {
        const instance = hostFixture.componentInstance;

        const el = hostFixture.debugElement.query(By.css(badgeBaseClass));
        expect(el).toBeTruthy();

        instance.type = 'secondary';
        hostFixture.detectChanges();

        const newsStyles = getComputedStyle(el.nativeElement);

        expect(newsStyles.backgroundColor).toEqual('rgb(133, 229, 232)');
    });
});
