import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { BrLibConfig } from "./br-lib.config";
import { BR_LIB_CONFIG } from "./br-lib.config.token";
import { BrBadgeModule } from "./components/badge/br-badge.module";

@NgModule({
  imports: [CommonModule, BrBadgeModule]


})
export class BrLibModule {
  static forRoot(
    brLibConfig?: BrLibConfig
  ): ModuleWithProviders<BrBadgeModule> {
    return ({
      ngModule: BrBadgeModule,
      providers: [
        {
          provide: BR_LIB_CONFIG,
          useValue: brLibConfig ? brLibConfig : { theme: "br" }
        },
        {
          provide: BrLibConfig,
          useFactory: provideConfig,
          deps: [BR_LIB_CONFIG]
        }
      ]
    });
  }
}

export function provideConfig(brLibConfig: BrLibConfig): BrLibConfig {
  return {
    theme: brLibConfig.theme
  };

}
