export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_ARCHELON_VERSION: string;
            REACT_APP_PROJECT_BUILD: string;
            REACT_APP_ARCHELON_VERSION_TITLE: string;
        }
    }
}