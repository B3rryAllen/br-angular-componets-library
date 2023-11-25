import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrLibConfig } from './br-lib.config';
import { BR_LIB_CONFIG } from './br-lib.config.token';
import { BrAccordionModule } from './components/accordion/br-accordion.module';
import { BrBadgeModule } from './components/badge/br-badge.module';
import { BrIconsModule } from './components/icons/br-icons.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        BrBadgeModule,
        BrAccordionModule,
        BrIconsModule,
    ],
})
export class BrLibModule {
    static forRoot(
        brLibConfig?: BrLibConfig
    ): ModuleWithProviders<BrBadgeModule> {
        return {
            ngModule: BrBadgeModule,
            providers: [
                {
                    provide: BR_LIB_CONFIG,
                    useValue: brLibConfig ? brLibConfig : { theme: 'br' },
                },
                {
                    provide: BrLibConfig,
                    useFactory: provideConfig,
                    deps: [BR_LIB_CONFIG],
                },
            ],
        };
    }
}

export function provideConfig(brLibConfig: BrLibConfig): BrLibConfig {
    return {
        theme: brLibConfig.theme,
    };
}
