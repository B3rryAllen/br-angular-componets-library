import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrButtonComponent } from './br-button.component';
import { BrLibModule } from '../../../br-lib.module';
import { BrButtonModule } from '../br-button.module';

describe('BrButtonComponent Exception during creation', () => {
    let fixture: ComponentFixture<BrButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrLibModule.forRoot(), BrButtonModule],
        }).compileComponents();
    });

    it('should throw an error when label is not provided', () => {
        expect(() => {
            fixture = TestBed.createComponent(BrButtonComponent);
            fixture.detectChanges();
        }).toThrowError();
    });
});
