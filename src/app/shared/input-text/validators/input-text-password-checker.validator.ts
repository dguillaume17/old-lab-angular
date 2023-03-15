import { ValidatorFn } from '@angular/forms';

export function InputTextPasswordCheckerValidator(): ValidatorFn {
    return control => {
        const text = control.value as string;

        if (text === 'easi') {
            return {
                invalidPassword: true
            };
        }

        return null;
    };
}