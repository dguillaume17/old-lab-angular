import { environment } from '../../../../environments/environment';

const SELECTOR_BASE_ANNOTATION = 'app-selector';

const SELECTOR_IMPL_NATIF_ANNOTATION = 'app-selector-impl-natif';

const SELECTOR_IMPL_NG_SELECT_ANNOTATION = 'app-selector-impl-ng-select';

export const SelectorImplType = {
    Natif: SELECTOR_IMPL_NATIF_ANNOTATION,
    NgSelect: SELECTOR_IMPL_NG_SELECT_ANNOTATION
};

export const COMPUTED_SELECTOR_IMPL_NATIF_ANNOTATION = environment.components.selector === SELECTOR_IMPL_NATIF_ANNOTATION ? SELECTOR_BASE_ANNOTATION : SELECTOR_IMPL_NATIF_ANNOTATION;
export const COMPUTED_SELECTOR_IMPL_NG_SELECT_ANNOTATION = environment.components.selector === SELECTOR_IMPL_NG_SELECT_ANNOTATION ? SELECTOR_BASE_ANNOTATION : SELECTOR_IMPL_NG_SELECT_ANNOTATION;