import { TestBed, ComponentFixture, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Galleria, GalleriaModule } from './galleria';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';

@Component({
    template: `
        <p-galleria></p-galleria>
    `
})
class TestGalleriaComponent {
}

describe('Galleria', () => {

    let galleria: Galleria;
    let fixture: ComponentFixture<Galleria>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                GalleriaModule
            ],
            declarations: [
                TestGalleriaComponent
            ]
        });

        fixture = TestBed.createComponent(Galleria);
        galleria = fixture.componentInstance;
    });

    it('check onMaskHide', () => {
        fixture.detectChanges();
        galleria.onMaskHide();

        expect(galleria.visible).toEqual(false);

    });

    it('check onActiveItemChange', () => {
        fixture.detectChanges();
        galleria.onActiveItemChange(1);

        expect(galleria.activeIndex).toEqual(1);

    });



});
