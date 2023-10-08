import { TestBed } from '@angular/core/testing'
import { BrLibConfig } from './br-lib.config'
import { BR_LIB_CONFIG } from './br-lib.config.token'
import { BrLibModule } from './br-lib.module'
import { Theme } from './theme'

describe('BrLibConfig', () => {
    let libConfigInstance: BrLibConfig

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrLibModule.forRoot({ theme: Theme.ca })],
        }).compileComponents()
    })

    beforeEach(() => {
        libConfigInstance = TestBed.inject(BR_LIB_CONFIG)
    })

    it('BR_LIB_CONFIG theme is ca', () => {
        expect(libConfigInstance).toEqual({ theme: 'ca' })
    })
})
