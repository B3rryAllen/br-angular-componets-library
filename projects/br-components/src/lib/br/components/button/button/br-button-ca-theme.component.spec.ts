import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BrButtonComponent } from './br-button.component';
import { BrLibModule } from '../../../br-lib.module';
import { BrButtonModule } from '../br-button.module';
import { BR_LIB_CONFIG } from '../../../br-lib.config.token';
import { Theme } from '../../../theme';

describe('BrButtonComponent', () => {
    const label = 'Test Button';

    let component: BrButtonComponent;
    let fixture: ComponentFixture<BrButtonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrLibModule.forRoot(), BrButtonModule],
            providers: [
                {
                    provide: BR_LIB_CONFIG,
                    useValue: { theme: Theme.ca },
                },
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

    it('should hava class ca', () => {
        const el = fixture.debugElement.query(By.css('.br-button'));
        expect(el).toBeTruthy();
        expect(el.nativeElement.classList).toContain('ca');
    });
});
