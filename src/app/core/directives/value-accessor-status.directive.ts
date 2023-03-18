import { Directive, Input } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[ngModel][valueAccessorStatus]',
    exportAs: 'valueAccessorStatus'
})
export class ValueAccessorStatusDirective {

    // Input properties

    @Input()
    public requiredErrorMessage = 'Required value';

    @Input()
    public patternErrorMessage = 'Invalid format';

    // Calculated properties

    public get error(): ValidationErrors | null {
        return this._ngControl.errors;
    }

    public get hasRequiredError(): boolean {
        return this.hasErrorFor('required');
    }

    public get hasPatternError(): boolean {
        return this.hasErrorFor('pattern');
    }

    public get isDisabled(): boolean {
        return !!this._ngControl.disabled;
    }

    public get isValid(): boolean {
        return !!this._ngControl.valid;
    }

    public get isTouched(): boolean {
        return !!this._ngControl.touched;
    }

    public get ngControl(): NgControl {
        return this._ngControl;
    }

    public get canDisplayError(): boolean {
        return !this.isDisabled && this.isTouched;
    }

    public get shouldDisplayRequiredError(): boolean {
        return this.canDisplayError && this.hasRequiredError;
    }

    public get shouldDisplayPatternError(): boolean {
        return this.canDisplayError && this.hasPatternError;
    }

    public get shoudDisplayError(): boolean {
        return this.shouldDisplayRequiredError || this.shouldDisplayPatternError;
    }

    public get errorMessage(): string {
        if (this.shouldDisplayRequiredError) {
            return this.requiredErrorMessage;
        }

        if (this.shouldDisplayPatternError) {
            return this.patternErrorMessage;
        }

        return '';
    }

    // Lifecycle

    constructor(
        private _ngControl: NgControl
    ) {}

    // Inner work

    private getErrorValueFor(errorProperty: string): unknown | null {
        return this.error?.[errorProperty];
    }

    private hasErrorFor(errorProperty: string): boolean {
        return this.getErrorValueFor(errorProperty) != null
            && this.getErrorValueFor(errorProperty) !== false;
    }
}
