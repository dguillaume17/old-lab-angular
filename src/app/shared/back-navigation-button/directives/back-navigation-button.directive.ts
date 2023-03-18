import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[app-back-navigation-button]'
})
export class BackNavigationButtonDirective {

    // Host listeners

    @HostListener('click')
    public onClick() {
        history.back();
    }
}