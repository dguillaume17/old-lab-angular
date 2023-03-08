import { environment } from '../../../../environments/environment';
import { SelectorImplType } from './selector-impl-type.static-enum';

const BASE_ANNOTATION = 'app-selector';

export const COMPUTED_SELECTOR_IMPL_NATIF_ANNOTATION = environment.components.selector === SelectorImplType.Natif
    ? BASE_ANNOTATION
    : SelectorImplType.Natif;

export const COMPUTED_SELECTOR_IMPL_NG_SELECT_ANNOTATION = environment.components.selector === SelectorImplType.NgSelect
    ? BASE_ANNOTATION
    : SelectorImplType.NgSelect;
