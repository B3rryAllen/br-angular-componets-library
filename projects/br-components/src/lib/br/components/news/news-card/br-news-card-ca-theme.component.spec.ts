import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrNewsModule } from '../br-news.module';
import { Component, DebugElement } from '@angular/core';
import { BrNewsCardComponent } from './br-news-card.component';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <div class="ca">
            <br-news>Test News</br-news>
        </div>
    `,
})
class TestHostComponent {}

describe('BrNewsComponent with CA Theme', () => {
    const newsBaseClass = '.br-news';

    let hostFixture: ComponentFixture<TestHostComponent>;

    let brNewsFixture: DebugElement;
    let brNewsComponent: BrNewsCardComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrNewsModule],
            declarations: [TestHostComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        hostFixture = TestBed.createComponent(TestHostComponent);
        brNewsFixture = hostFixture.debugElement.query(By.css(newsBaseClass));
        brNewsComponent = brNewsFixture.componentInstance;

        hostFixture.detectChanges();
    });

    it('should create', () => {
        expect(brNewsComponent).toBeTruthy();
    });

    it('should hava color of ca theme', () => {
        const newsStyles = getComputedStyle(brNewsFixture.nativeElement);

        expect(newsStyles.backgroundColor).toEqual('rgb(181, 239, 240)');
        expect(newsStyles.borderLeftColor).toEqual('rgb(18, 142, 146)');
    });
});
