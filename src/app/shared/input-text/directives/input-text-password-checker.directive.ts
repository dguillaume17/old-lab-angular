import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { InputTextPasswordCheckerValidator } from '../validators/input-text-password-checker.validator';

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
        const passwordCheck = InputTextPasswordCheckerValidator()(control);

        if (passwordCheck != null) {
            return {
                ...passwordCheck
            };
        }
        
        return null;
    }
}
