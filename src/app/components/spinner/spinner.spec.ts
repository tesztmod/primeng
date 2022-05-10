import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Spinner, SpinnerModule } from './spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';

@Component({
    template: `
        <p-spinner></p-spinner>
    `
})
class TestSpinnerComponent {
}
describe('Spinner', () => {

    let tag: Spinner;
	let fixture: ComponentFixture<Spinner>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                SpinnerModule
            ],
            declarations: [
                TestSpinnerComponent
            ]
        });

        fixture = TestBed.createComponent(Spinner);
		tag = fixture.componentInstance;
    });


    it('check initial values', () => {
        fixture.detectChanges();
        expect(tag._step).toEqual(1);

    });

    it('check repeat', () => {
        fixture.detectChanges();
        tag.repeat(event,0,1)

        expect(tag._step).toEqual(1);

    });

    it('check spin 1', () => {
        fixture.detectChanges();
        tag.spin(event, 1)

        expect(tag._step).toEqual(1);

    });

    it('check spin 2', () => {
        fixture.detectChanges();
        tag.value = 1
        tag.spin(event, 1)

        expect(tag._step).toEqual(1);

    });

    it('check spin 3', () => {
        fixture.detectChanges();
        tag.value = '1'
        tag.spin(event, 1)

        expect(tag.value).toEqual(2);

    });

    it('check spin 4', () => {
        fixture.detectChanges();
        tag.precision = 1;
        tag.spin(event, 1)

        expect(tag.value).toEqual(1);

    });

    it('check spin 5', () => {
        fixture.detectChanges();
        tag.value = 11;
        tag.maxlength=1;
        tag.spin(event, 1)

        expect(tag.value).toEqual(11);

    });

    it('check spin 6', () => {
        fixture.detectChanges();
        tag.value = 5;
        tag.min=6;
        tag.spin(event, 1)

        expect(tag.value).toEqual(6);

    });

    it('check spin 7', () => {
        fixture.detectChanges();
        tag.value = 6;
        tag.max=5;
        tag.spin(event, 1)

        expect(tag.value).toEqual(5);

    });

    it('check precision not undefinied', () => {
        fixture.detectChanges();
        tag.precision = 1
        tag.getPrecision()

        expect(tag.precision).toEqual(1);

    });

    it('check onUpButtonMousedown', () => {
        fixture.detectChanges();
        tag.disabled = false;
        tag.onUpButtonMousedown(event);

        expect(tag._step).toEqual(1);

    });

    it('check onUpButtonMouseup', () => {
        fixture.detectChanges();
        tag.disabled = false;
        tag.onUpButtonMouseup(event);

        expect(tag._step).toEqual(1);

    });

    it('check onUpButtonMouseleave', () => {
        fixture.detectChanges();
        tag.disabled = false;
        tag.onUpButtonMouseleave(event);

        expect(tag._step).toEqual(1);

    });

    it('check onDownButtonMousedown', () => {
        fixture.detectChanges();
        tag.disabled = false;
        tag.onDownButtonMousedown(event);

        expect(tag._step).toEqual(1);

    });

    it('check onDownButtonMouseup', () => {
        fixture.detectChanges();
        tag.disabled = false;
        tag.onDownButtonMouseup(event);

        expect(tag._step).toEqual(1);

    });

    it('check onDownButtonMouseleave', () => {
        fixture.detectChanges();
        tag.disabled = false;
        tag.onDownButtonMouseleave(event);

        expect(tag._step).toEqual(1);

    });

    it('check onInputChange', () => {
        fixture.detectChanges();
        tag.onInputChange(event);

        expect(tag._step).toEqual(1);

    });

    it('check onInputBlur', () => {
        fixture.detectChanges();
        tag.onInputBlur(event);

        expect(tag.focus).toEqual(false);

    });

    it('check onInputFocus', () => {
        fixture.detectChanges();
        tag.onInputFocus(event);

        expect(tag.focus).toEqual(true);

    });

    it('check parseValue null', () => {
        fixture.detectChanges();
        tag.parseValue('')

        expect(tag.value).toEqual(undefined);

    });

    it('check parseValue formatimput', () => {
        tag.formatInput = true

        fixture.detectChanges();
        tag.parseValue('1')

        expect(tag.value).toEqual(undefined);

    });

    it('check parseValue precision', () => {
        tag.precision = 1

        fixture.detectChanges();
        tag.parseValue('1')

        expect(tag.value).toEqual(undefined);

    });

});
