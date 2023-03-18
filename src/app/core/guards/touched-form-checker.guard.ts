import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { TouchedFormDeactivateCompliant } from '../interfaces/touched-form-deactivate-compliant.interface';

@Injectable()
export class TouchedFormDeactivateChecker implements CanDeactivate<TouchedFormDeactivateCompliant> {

    // CanDeactivate implements

    canDeactivate(component: TouchedFormDeactivateCompliant): boolean {
        const ngForm = component.ngForm;

        if (ngForm == null) {
            return true;
        }

        const isFormTouched = ngForm.touched ?? false;

        const canDeactivate = isFormTouched ? window.confirm('Formulaire touché. Voulez-vous vraiment quitter?') : true;

        return canDeactivate;
    }

}