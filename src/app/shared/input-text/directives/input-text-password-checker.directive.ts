import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: 'app-input-text[password-checker]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => InputTextPasswordChecker),
            multi: true
        }
    ]
})
export class InputTextPasswordChecker implements Validator {

    // Lifecycle

    validate(control: AbstractControl): ValidationErrors | null {
        console.log('checker')
        
    }
}
