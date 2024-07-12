import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BrLibModule } from '../../../br-lib.module';
import { BR_LIB_CONFIG } from '../../../br-lib.config.token';
import { Theme } from '../../../theme';
import { BrNewsModule } from '../br-news.module';
import { BrNewsCardComponent } from './br-news-card.component';

describe('BrNewsComponent', () => {
    let component: BrNewsCardComponent;
    let fixture: ComponentFixture<BrNewsCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrLibModule.forRoot(), BrNewsModule],
            providers: [
                {
                    provide: BR_LIB_CONFIG,
                    useValue: { theme: Theme.ca },
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BrNewsCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should hava class ca', () => {
        const el = fixture.debugElement.query(By.css('.br-news'));
        expect(el).toBeTruthy();
        expect(el.nativeElement.classList).toContain('ca');
    });
});
