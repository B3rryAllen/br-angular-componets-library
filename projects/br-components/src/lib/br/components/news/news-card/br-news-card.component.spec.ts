import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrNewsCardComponent } from './br-news-card.component';
import { BrLibModule } from '../../../br-lib.module';
import { BrNewsModule } from '../br-news.module';
import { By } from '@angular/platform-browser';

describe('BrNewsComponent', () => {
    const newsBaseClass = '.br-news';

    let component: BrNewsCardComponent;
    let fixture: ComponentFixture<BrNewsCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrLibModule.forRoot(), BrNewsModule],
        });
        fixture = TestBed.createComponent(BrNewsCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have theme as br', () => {
        expect(component.theme).toEqual('br');
    });

    it('should have default newsType as Info', () => {
        expect(component.newsType).toEqual('Info');

        const buttonElement = fixture.debugElement.query(By.css(newsBaseClass));
        expect(buttonElement.classes['br-news_type-info']).toBeTruthy();
    });

    it('should have br-news_type-warning class when type is Warning', () => {
        component.newsType = 'Warning';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(By.css(newsBaseClass));
        expect(buttonElement.classes['br-news_type-warning']).toBeTruthy();
    });

    it('should have br-news_type-waiting class when type is Waiting', () => {
        component.newsType = 'Waiting';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(By.css(newsBaseClass));
        expect(buttonElement.classes['br-news_type-waiting']).toBeTruthy();
    });

    it('should have br-news_type-error class when type is Error', () => {
        component.newsType = 'Error';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(By.css(newsBaseClass));
        expect(buttonElement.classes['br-news_type-error']).toBeTruthy();
    });

    it('should have br-news_type-success class when type is Success', () => {
        component.newsType = 'Success';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(By.css(newsBaseClass));
        expect(buttonElement.classes['br-news_type-success']).toBeTruthy();
    });

    it('should have default newsShape as Oval', () => {
        expect(component.newsShape).toEqual('Oval');

        const buttonElement = fixture.debugElement.query(By.css(newsBaseClass));
        expect(buttonElement.classes['br-news_shape-oval']).toBeTruthy();
    });

    it('should have br-news_shape-rectangle class when type is Rectangle', () => {
        component.newsShape = 'Rectangle';
        fixture.detectChanges();

        expect(component.newsShape).toEqual('Rectangle');

        const buttonElement = fixture.debugElement.query(By.css(newsBaseClass));
        expect(buttonElement.classes['br-news_shape-rectangle']).toBeTruthy();
    });

    it('should have default newsSize as Medium', () => {
        expect(component.newsSize).toEqual('Medium');
    });

    it('should have br-news_size-small class when type is Small', () => {
        component.newsSize = 'Small';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(By.css(newsBaseClass));
        expect(buttonElement.classes['br-news_size-small']).toBeTruthy();
    });

    it('should have br-news_size-large class when type is Large', () => {
        component.newsSize = 'Large';
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(By.css(newsBaseClass));
        expect(buttonElement.classes['br-news_size-large']).toBeTruthy();
    });
});
