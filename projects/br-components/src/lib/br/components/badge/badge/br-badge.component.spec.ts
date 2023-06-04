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
                    useValue: { theme: Theme.br },
                },
            ],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(BrBadgeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should hava class br', () => {
        const el = fixture.debugElement.query(By.css('.br-badge'))
        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).toContain('br')
    })

    it('should hava class br-badge', () => {
        const el = fixture.debugElement.query(By.css('.br-badge'))
        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).toContain('br-badge')
    })

    it('should hava class br-badge_info as default type class', () => {
        const el = fixture.debugElement.query(By.css('.br-badge'))
        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).toContain('br-badge_info')
    })

    it('should hava class br-badge_primary as type class when type is primary', () => {
        const instance = fixture.componentInstance

        const el = fixture.debugElement.query(By.css('.br-badge'))
        expect(el).toBeTruthy()

        instance.type = 'primary'
        fixture.detectChanges()

        expect(el.nativeElement.classList).toContain('br-badge_primary')
    })

    it('should hava class br-badge_secondary as type class when type is secondary', () => {
        const instance = fixture.componentInstance

        const el = fixture.debugElement.query(By.css('.br-badge'))
        expect(el).toBeTruthy()

        instance.type = 'secondary'
        fixture.detectChanges()

        expect(el.nativeElement.classList).toContain('br-badge_secondary')
    })

    it('should contain count property as text', () => {
        const instance = fixture.componentInstance

        const el = fixture.debugElement.nativeElement
        expect(el).toBeTruthy()

        instance.count = 3
        fixture.detectChanges()

        expect(el.querySelector('.br-badge__content').textContent).toBe('3')
    })
})
