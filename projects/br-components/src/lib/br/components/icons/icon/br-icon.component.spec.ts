import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { BR_LIB_CONFIG } from '../../../br-lib.config.token'
import { Theme } from '../../../theme'
import { BrIconsModule } from '../br-icons.module'
import { BrIconComponent } from './br-icon.component'

describe('BrIconComponent', () => {
    let component: BrIconComponent
    let fixture: ComponentFixture<BrIconComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrIconsModule, AngularSvgIconModule.forRoot()],
            providers: [
                {
                    provide: BR_LIB_CONFIG,
                    useValue: { theme: Theme.br },
                },
            ],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(BrIconComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should hava class br-icon', () => {
        const el = fixture.debugElement.query(By.css('.br-icon'))
        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).toContain('br-icon')
    })

    it('should have class br-icon--size-small if size is small', () => {
        const instance = fixture.componentInstance
        const el = fixture.debugElement.query(By.css('.br-icon'))

        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).not.toContain('br-icon--size-small')

        instance.size = 'small'
        fixture.detectChanges()

        expect(el.nativeElement.classList).toContain('br-icon--size-small')
    })

    it('should have class br-icon--size-medium if size is medium', () => {
        const instance = fixture.componentInstance
        const el = fixture.debugElement.query(By.css('.br-icon'))

        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).not.toContain('br-icon--size-medium')

        instance.size = 'medium'
        fixture.detectChanges()

        expect(el.nativeElement.classList).toContain('br-icon--size-medium')
    })

    it('should have class br-icon--size-large if size is large', () => {
        const instance = fixture.componentInstance
        const el = fixture.debugElement.query(By.css('.br-icon'))

        expect(el).toBeTruthy()
        expect(el.nativeElement.classList).not.toContain('br-icon--size-large')

        instance.size = 'large'
        fixture.detectChanges()

        expect(el.nativeElement.classList).toContain('br-icon--size-large')
    })

    const arrowLeftSvgPath =
        'd="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"'

    it('should contains arrowLeft svg if name is arrowLeft', () => {
        const instance = fixture.componentInstance
        const el = fixture.debugElement.query(By.css('.br-icon'))

        expect(el).toBeTruthy()

        instance.name = 'arrowLeft'
        fixture.detectChanges()

        expect(el.nativeElement.innerHTML).toContain(arrowLeftSvgPath)
    })

    const chevronDownPath =
        'd="M8.295 16.885L12.875 12.295 8.295 7.705 9.705 6.295 15.705 12.295 9.705 18.295z"'

    it('should contains arrowLeft svg if name is chevronDown', () => {
        const instance = fixture.componentInstance
        const el = fixture.debugElement.query(By.css('.br-icon'))

        expect(el).toBeTruthy()

        instance.name = 'chevronDown'
        fixture.detectChanges()

        expect(el.nativeElement.innerHTML).toContain(chevronDownPath)
    })
})
