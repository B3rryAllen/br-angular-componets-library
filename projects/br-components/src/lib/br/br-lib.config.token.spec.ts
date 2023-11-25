import { TestBed } from '@angular/core/testing';
import { BrLibConfig } from './br-lib.config';
import { BR_LIB_CONFIG } from './br-lib.config.token';
import { BrLibModule, provideConfig } from './br-lib.module';
import { Theme } from './theme';

describe('BrLibConfig', () => {
    let libConfigInstance: BrLibConfig;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrLibModule.forRoot()],
        }).compileComponents();
    });

    beforeEach(() => {
        libConfigInstance = TestBed.inject(BR_LIB_CONFIG);
    });

    it('BR_LIB_CONFIG theme is br', () => {
        expect(libConfigInstance).toEqual({ theme: 'br' });
    });

    it("provideConfig return BrLibConfig { theme: 'ca'}", () => {
        const libConfig = provideConfig({ theme: Theme.ca });
        expect(libConfig).toEqual({ theme: 'ca' });
    });
});
