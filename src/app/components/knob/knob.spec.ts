import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Knob, KnobModule } from './knob';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';

@Component({
    template: `
        <p-knob></p-knob>
    `
})
class TestKnobComponent {
    valueColor: string = "green";
}

describe('Knob', () => {

	let tag: Knob;
	let fixture: ComponentFixture<Knob>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				NoopAnimationsModule,
                KnobModule
			],
			declarations: [
                TestKnobComponent
			]
		});

		fixture = TestBed.createComponent(Knob);
		tag = fixture.componentInstance;

	});

    it('check initial values', () => {
        fixture.detectChanges();
        expect(tag.midX).toEqual(50);
        expect(tag.minRadians).toEqual(4 * Math.PI / 3);
        expect(tag.maxRadians).toEqual(-Math.PI / 3);

    });

    it('check call of update value', () => {

        fixture.detectChanges();

        const updateModelStateSpy = spyOn(tag, 'updateModel');
        tag.updateValue(1,1);
		expect(updateModelStateSpy).toHaveBeenCalled();

    });

    it('check updateModel', () => {

        fixture.detectChanges();
        tag.updateModel(-Math.PI / 4,-Math.PI / 4);
        expect(tag.value).toEqual(95);

    });

    it('check updateModel angle less than start', () => {

        fixture.detectChanges();
        tag.updateModel(-Math.PI / 3,-Math.PI / 4);
        expect(tag.value).toEqual(-20);

    });

    it('check onClick', () => {
        tag.onClick(event);
        fixture.detectChanges();
        const onClickStateSpy = spyOn(tag, 'onClick');
        tag.onClick(event);
        expect(onClickStateSpy).toHaveBeenCalled();

    });

    it('check onMouseDown', () => {
        tag.onMouseDown(event);
        fixture.detectChanges();
        const onMouseDownStateSpy = spyOn(tag, 'onMouseDown');
        tag.onMouseDown(event);
        expect(onMouseDownStateSpy).toHaveBeenCalled();

    });

    it('check onMouseUp', () => {
        tag.onMouseUp(event);
        fixture.detectChanges();
        const onMouseUpStateSpy = spyOn(tag, 'onMouseUp');
        tag.onMouseUp(event);
        expect(onMouseUpStateSpy).toHaveBeenCalled();
    });

    it('check writeValue', () => {

        fixture.detectChanges();
        tag.writeValue(1);
        expect(tag.value).toEqual(1);

    });

    it('check registerOnChange', () => {
        fixture.detectChanges();
        tag.registerOnChange(Function);
        expect(tag.onModelChange).toEqual(Function);

    });

    it('check registerOnTouched', () => {
        fixture.detectChanges();
        tag.registerOnTouched(Function);
        expect(tag.onModelTouched).toEqual(Function);

    });

    it('check setDisabledState', () => {
        fixture.detectChanges();
        tag.setDisabledState(true);
        expect(tag.disabled).toEqual(true);

    });

    it('check zeroRadians this max 0', () => {

        fixture.detectChanges();
        tag.max = 1;
        tag.min = 1;

        expect(tag.zeroRadians()).toEqual(NaN);

    });

    it('check zeroRadians this max 0', () => {

        fixture.detectChanges();
        spyOn(tag, 'largeArc').and.callFake(function(){
            return 1;
        });


        expect(tag.largeArc()).toEqual(1);

    });

});
