/*
 * action types
 */

export const START_BOOT_SEQUENCE = 'START_BOOT_SEQUENCE';
export const BOOT_SEQUENCE_COMPLETED = 'BOOT_SEQUENCE_COMPLETED';
export const START_ADDITIONAL_DATA_LOADING = 'START_ADDITIONAL_DATA_LOADING';
export const ADDITIONAL_DATA_LOADING_COMPLETED = 'ADDITIONAL_DATA_LOADING_COMPLETED';


/*
 * action creators
 */

export const startBootSquence = () => {
    return { type: START_BOOT_SEQUENCE }
};

export const bootSequenceCompleted = () => {
    return { type: BOOT_SEQUENCE_COMPLETED }
};

export const startAdditionalDataLoading = () => {
    return { type: START_ADDITIONAL_DATA_LOADING }
};

export const additionalDataLoadingCompleted = () => {
    return { type: ADDITIONAL_DATA_LOADING_COMPLETED }
};

