import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrBadgeModule } from '../br-badge.module';
import { BrBadgeComponent } from './br-badge.component';

describe('BrBadgeComponent', () => {
    const badgeBaseClass = '.br-badge';

    let component: BrBadgeComponent;
    let fixture: ComponentFixture<BrBadgeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrBadgeModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BrBadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have theme as br', () => {
        const newsNativeElement = fixture.debugElement.query(
            By.css(badgeBaseClass)
        ).nativeElement;
        const newsStyles = getComputedStyle(newsNativeElement);

        expect(newsStyles.backgroundColor).toEqual('rgb(0, 149, 235)');
    });

    it('should hava class br-badge', () => {
        const el = fixture.debugElement.query(By.css(badgeBaseClass));
        expect(el).toBeTruthy();
        expect(el.nativeElement.classList).toContain('br-badge');
    });

    it('should hava class br-badge_info as default type class', () => {
        const el = fixture.debugElement.query(By.css(badgeBaseClass));
        expect(el).toBeTruthy();
        expect(el.nativeElement.classList).toContain('br-badge_info');
    });

    it('should hava class br-badge_primary as type class when type is primary', () => {
        const instance = fixture.componentInstance;

        const el = fixture.debugElement.query(By.css(badgeBaseClass));
        expect(el).toBeTruthy();

        instance.type = 'primary';
        fixture.detectChanges();

        expect(el.nativeElement.classList).toContain('br-badge_primary');
    });

    it('should hava br color theme when type is primary', () => {
        const instance = fixture.componentInstance;

        const el = fixture.debugElement.query(By.css(badgeBaseClass));
        expect(el).toBeTruthy();

        instance.type = 'primary';
        fixture.detectChanges();

        const newsStyles = getComputedStyle(el.nativeElement);

        expect(newsStyles.backgroundColor).toEqual('rgb(0, 117, 203)');
    });

    it('should hava class br-badge_secondary as type class when type is secondary', () => {
        const instance = fixture.componentInstance;

        const el = fixture.debugElement.query(By.css(badgeBaseClass));
        expect(el).toBeTruthy();

        instance.type = 'secondary';
        fixture.detectChanges();

        expect(el.nativeElement.classList).toContain('br-badge_secondary');
    });

    it('should hava br theme when type is primary', () => {
        const instance = fixture.componentInstance;

        const el = fixture.debugElement.query(By.css(badgeBaseClass));
        expect(el).toBeTruthy();

        instance.type = 'secondary';
        fixture.detectChanges();

        const newsStyles = getComputedStyle(el.nativeElement);

        expect(newsStyles.backgroundColor).toEqual('rgb(185, 221, 248)');
    });

    it('should contain count property as text', () => {
        const instance = fixture.componentInstance;

        const el = fixture.debugElement.nativeElement;
        expect(el).toBeTruthy();

        instance.count = 3;
        fixture.detectChanges();

        expect(el.querySelector('.br-badge__content').textContent).toBe('3');
    });
});
