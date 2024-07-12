import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BrScrollerModule } from '../br-scroller.module';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <br-horizontal-scroller [brStyle]="{ 'max-width': '620px' }">
            <div
                style="background-color: white; display: flex; flex-direction: row; width: 1000px">
                <div style="width: 100px">Row 1</div>
                <div style="width: 100px">Row 2</div>
                <div style="width: 100px">Row 3</div>
                <div style="width: 100px">Row 4</div>
                <div style="width: 100px">Row 5</div>
                <div style="width: 100px">Row 6</div>
                <div style="width: 100px">Row 7</div>
                <div style="width: 100px">Row 8</div>
                <div style="width: 100px">Row 9</div>
                <div style="width: 100px">Row 10</div>
            </div>
        </br-horizontal-scroller>
    `,
})
class TestBrHorizontalScrollerComponent {}

describe('BrHorizontalScrollerComponent', () => {
    const brHorizontalScrollerCssSelector = '.br-horizontal-scroller';
    const brHorizontalScrollerContentClass = '.br-horizontal-scroller__content';

    let component: TestBrHorizontalScrollerComponent;
    let fixture: ComponentFixture<TestBrHorizontalScrollerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestBrHorizontalScrollerComponent],
            imports: [BrScrollerModule],
        });
        fixture = TestBed.createComponent(TestBrHorizontalScrollerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have scrollable div', () => {
        const scrollableDiv = fixture.debugElement.query(
            By.css(brHorizontalScrollerContentClass)
        );
        expect(scrollableDiv).toBeTruthy();
    });

    it('should have default attribute', () => {
        const horizontalScrollableComponent = fixture.debugElement.query(
            By.css(brHorizontalScrollerCssSelector)
        ).componentInstance;
        horizontalScrollableComponent.brStyle = { 'max-width': '620px' };
        fixture.detectChanges();
        const scrollableDiv = fixture.debugElement.query(
            By.css(brHorizontalScrollerContentClass)
        );
        expect(scrollableDiv.attributes['tabindex']).toBe('0');
    });

    it('should apply custom style correctly', () => {
        const horizontalScrollableComponent = fixture.debugElement.query(
            By.css(brHorizontalScrollerCssSelector)
        ).componentInstance;
        horizontalScrollableComponent.brStyle = { 'max-width': '200px' };
        horizontalScrollableComponent.tabIndex = 1;
        fixture.detectChanges();

        const horizontalScrollableDiv = fixture.debugElement.query(
            By.css(brHorizontalScrollerCssSelector)
        );
        expect(horizontalScrollableDiv.styles['max-width']).toBe('200px');

        const scrollerContentDiv = fixture.debugElement.query(
            By.css(brHorizontalScrollerContentClass)
        );
        expect(scrollerContentDiv.attributes['tabindex']).toBe('1');
    });

    it('should hide br-horizontal-scroller__content__right when scrolled to the end', () => {
        const scrollerDiv = fixture.debugElement.query(
            By.css(brHorizontalScrollerContentClass)
        ).nativeElement;
        const scrollerContentRightDiv = fixture.debugElement.query(
            By.css('.br-horizontal-scroller__content__right')
        ).nativeElement;

        // Simulate scroll event
        scrollerDiv.scrollLeft =
            scrollerDiv.scrollWidth - scrollerDiv.clientWidth;

        scrollerDiv.dispatchEvent(new Event('scroll'));
        fixture.detectChanges();

        // Check if bottom div is not visible
        expect(window.getComputedStyle(scrollerContentRightDiv).display).toBe(
            'none'
        );
    });

    it('should show br-horizontal-scroller__content__left when scrolled to the end', () => {
        const scrollerContentDiv = fixture.debugElement.query(
            By.css(brHorizontalScrollerContentClass)
        ).nativeElement;
        const topDiv = fixture.debugElement.query(
            By.css('.br-horizontal-scroller__content__left')
        ).nativeElement;

        // Simulate scroll event
        scrollerContentDiv.scrollLeft =
            scrollerContentDiv.scrollWidth - scrollerContentDiv.clientWidth;

        scrollerContentDiv.dispatchEvent(new Event('scroll'));
        fixture.detectChanges();

        // Check if bottom div is not visible
        expect(window.getComputedStyle(topDiv).display).toBe('block');
    });
});
