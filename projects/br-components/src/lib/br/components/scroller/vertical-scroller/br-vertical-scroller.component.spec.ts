import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { BrScrollerModule } from '../br-scroller.module';

@Component({
    template: `
        <br-vertical-scroller [brStyle]="{ 'max-height': '100px' }">
            <div style="background-color: white">
                <div>Row 1</div>
                <div>Row 2</div>
                <div>Row 3</div>
                <div>Row 4</div>
                <div>Row 5</div>
                <div>Row 6</div>
                <div>Row 7</div>
                <div>Row 8</div>
                <div>Row 9</div>
                <div>Row 10</div>
                <div>Row 11</div>
            </div>
        </br-vertical-scroller>
    `,
})
class TestBrVerticalScrollerComponent {}

describe('BrVerticalScrollerComponent', () => {
    const brVerticalScrollerCssSelector = '.br-vertical-scroller';
    const brVerticalScrollerContentClass = '.br-vertical-scroller__content';

    let component: TestBrVerticalScrollerComponent;
    let fixture: ComponentFixture<TestBrVerticalScrollerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestBrVerticalScrollerComponent],
            imports: [BrScrollerModule],
        });
        fixture = TestBed.createComponent(TestBrVerticalScrollerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have scrollable div', () => {
        const scrollableDiv = fixture.debugElement.query(
            By.css(brVerticalScrollerContentClass)
        );
        expect(scrollableDiv).toBeTruthy();
    });

    it('should have default attribute', () => {
        const verticalScrollableComponent = fixture.debugElement.query(
            By.css(brVerticalScrollerCssSelector)
        ).componentInstance;
        verticalScrollableComponent.brStyle = { 'max-height': '200px' };
        fixture.detectChanges();
        const scrollableDiv = fixture.debugElement.query(
            By.css(brVerticalScrollerContentClass)
        );
        expect(scrollableDiv.attributes['tabindex']).toBe('0');
    });

    it('should apply custom style correctly', () => {
        const verticalScrollableComponent = fixture.debugElement.query(
            By.css(brVerticalScrollerCssSelector)
        ).componentInstance;
        verticalScrollableComponent.brStyle = { 'max-height': '200px' };
        verticalScrollableComponent.tabIndex = 1;
        fixture.detectChanges();
        const scrollableDiv = fixture.debugElement.query(
            By.css(brVerticalScrollerContentClass)
        );
        expect(scrollableDiv.styles['max-height']).toBe('200px');
        expect(scrollableDiv.attributes['tabindex']).toBe('1');
    });

    it('should hide br-vertical-scroller__content__bottom when scrolled to the end', () => {
        const scrollerDiv = fixture.debugElement.query(
            By.css(brVerticalScrollerContentClass)
        ).nativeElement;
        const bottomDiv = fixture.debugElement.query(
            By.css('.br-vertical-scroller__content__bottom')
        ).nativeElement;

        // Simulate scroll event
        scrollerDiv.scrollTop =
            scrollerDiv.scrollHeight - scrollerDiv.clientHeight;

        scrollerDiv.dispatchEvent(new Event('scroll'));
        fixture.detectChanges();

        // Check if bottom div is not visible
        expect(window.getComputedStyle(bottomDiv).display).toBe('none');
    });

    it('should show br-vertical-scroller__content__top when scrolled to the end', () => {
        const scrollerContentDiv = fixture.debugElement.query(
            By.css(brVerticalScrollerContentClass)
        ).nativeElement;
        const topDiv = fixture.debugElement.query(
            By.css('.br-vertical-scroller__content__top')
        ).nativeElement;

        // Simulate scroll event
        scrollerContentDiv.scrollTop =
            scrollerContentDiv.scrollHeight - scrollerContentDiv.clientHeight;

        scrollerContentDiv.dispatchEvent(new Event('scroll'));
        fixture.detectChanges();

        // Check if bottom div is not visible
        expect(window.getComputedStyle(topDiv).display).toBe('block');
    });
});
