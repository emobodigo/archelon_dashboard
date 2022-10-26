export const ARCHELON_VERSION = process.env.REACT_APP_ARCHELON_VERSION;
export const PROJECT_BUILD = process.env.REACT_APP_PROJECT_BUILD;
export const ARCHELON_VERSION_TITLE = process.env.REACT_APP_ARCHELON_VERSION_TITLE

export enum MessageStatus {
    Success = 'success',
    Error = 'error',
    Warning = 'warning'
}

export enum LabelSize {
    xl = "prime",
    md = "sub",
}

export enum ButtonType {
    GOOD = "good",
    BAD = "bad",
    WARNING = "warning",
    PRIMARY = "primary",
}