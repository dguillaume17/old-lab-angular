import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Nullable } from '../../common/types/extended.type';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextComponent),
            multi: true
        }
    ]
})
export class InputTextComponent implements ControlValueAccessor {

    // Public properties

    public text: Nullable<string>;
    public disabled = false;

    // NG_VALUE_ACCESSOR properties

    public onChange = (text: Nullable<string>) => { };
    public onTouched = () => { };

    // Event listeners

    public onTextChanged() {
        this.onChange(this.text);
    }

    public onClearButtonClicked() {
        this.text = '';
        this.onChange('');
    }

    // NG_VALUE_ACCESSOR work

    public writeValue(text: Nullable<string>) {
        this.text = text;
    }

    public registerOnChange(fn: any) {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    public setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }
}