import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Lightbox, LightboxModule } from './lightbox';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';

@Component({
    template: `
        <p-lightbox></p-lightbox>
    `
})
class TestLightboxComponent {
}

describe('Lightbox', () => {

    let tag: Lightbox;
	let fixture: ComponentFixture<Lightbox>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                LightboxModule
            ],
            declarations: [
                TestLightboxComponent
            ]
        });

        fixture = TestBed.createComponent(Lightbox);
		tag = fixture.componentInstance;

    });

    it('check initial values', () => {

        fixture.detectChanges();
        tag.onLinkClick(event, null);
        expect(tag).toBeTruthy();

    });

    it('check hide values', () => {
        fixture.detectChanges();
        tag.hide(event);
        expect(tag.visible).toEqual(false);
    });


    it('check display image', () => {
        const img = {title: "asd"};

        fixture.detectChanges();
        tag.displayImage(img);
        expect(tag).toBeTruthy();
    });

    it('check image click', () => {
        const img = {title: "asd"};
        const cnt = {style: {width: "", height: ""}};
        fixture.detectChanges();
        tag.onImageClick(event, img, 1, cnt);
        expect(tag.preventDocumentClickListener).toEqual(true);
    });

    it('check prev', () => {
        const ph = {style: {display: ""}};
        tag.images = ['1', '2'];
        tag.index = 1;
        fixture.detectChanges();
        tag.prev(ph)
        expect(tag.loading).toEqual(true);
    });

    it('check next', () => {
        const ph = {style: {display: ""}};
        tag.images = ['1', '2'];
        tag.index = 0;
        fixture.detectChanges();
        tag.next(ph);
        expect(tag.loading).toEqual(true);
    });




});
