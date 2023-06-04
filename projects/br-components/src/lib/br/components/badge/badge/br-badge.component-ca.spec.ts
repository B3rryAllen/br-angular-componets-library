import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { BR_LIB_CONFIG } from '../../../br-lib.config.token'
import { Theme } from '../../../theme'
import { BrBadgeModule } from '../br-badge.module'
import { BrBadgeComponent } from './br-badge.component'

describe('BrBadgeComponent', () => {
    let component: BrBadgeComponent
    let fixture: ComponentFixture<BrBadgeComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrBadgeModule],
            providers: [
                {
                    provide: BR_LIB_CONFIG,
                    useValue: { theme: Theme.ca },
                },
            ],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(BrBadgeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should hava class ca', () => {
        const el = fixture.debugElement.query(By.css('.br-badge'))
        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).toContain('ca')
    })
})
