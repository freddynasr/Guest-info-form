/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { guestInfo, selectOption } from "./common/models";
export { guestInfo, selectOption } from "./common/models";
export namespace Components {
    interface IrButton {
        "btn_block": boolean;
        "btn_color": string;
        "btn_disabled": boolean;
        "btn_size": string;
        "btn_type": string;
        "icon": string;
        "name": string;
        "text": any;
    }
    interface IrCheckbox {
        "checked": boolean;
        "label": string;
        "name": string;
    }
    interface IrGuestInfo {
        "data": guestInfo;
        "setupDataCountries": selectOption[];
        "setupDataCountriesCode": selectOption[];
    }
    interface IrIcon {
        "icon": string;
    }
    interface IrInputText {
        "LabelAvailable": boolean;
        "inputStyle": boolean;
        "label": string;
        "name": string;
        "placeholder": string;
        "required": boolean;
        "submited": boolean;
        "text": any;
        "type": string;
    }
    interface IrSelect {
        "LabelAvailable": boolean;
        "data": selectOption[];
        "firstOption": string;
        "label": string;
        "name": string;
        "required": boolean;
        "selectStyle": boolean;
        "selectedValue": any;
        "submited": boolean;
    }
    interface IrSidebar {
        "name": string;
        "open": boolean;
        "side": 'right' | 'left';
        "toggleSidebar": () => Promise<void>;
    }
    interface IrSpan {
        "text": any;
    }
    interface IrSwitch {
        "baseClass"?: string;
        "classOn"?: string;
        "colorOn"?: string;
        "disabled"?: boolean;
        "handleWidth"?: string | 'auto';
        "indeterminate"?: boolean;
        "inverse"?: boolean;
        "labelOff": string;
        "labelOn": string;
        "labelText"?: string;
        "labelWidth"?: string | 'auto';
        "offClass"?: string;
        "offColor"?: string;
        "radioAllOff"?: boolean;
        "readonly"?: boolean;
        "size"?: string | 'mini' | 'small' | 'normal' | 'large';
        "switch_animate"?: boolean;
        "value": boolean;
        "wrapperClass"?: string;
    }
    interface IrTextarea {
        "cols": number;
        "label": string;
        "placeholder": string;
        "rows": number;
        "text": string;
    }
}
export interface IrButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrButtonElement;
}
export interface IrCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrCheckboxElement;
}
export interface IrGuestInfoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrGuestInfoElement;
}
export interface IrInputTextCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrInputTextElement;
}
export interface IrSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrSelectElement;
}
export interface IrSwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrSwitchElement;
}
declare global {
    interface HTMLIrButtonElement extends Components.IrButton, HTMLStencilElement {
    }
    var HTMLIrButtonElement: {
        prototype: HTMLIrButtonElement;
        new (): HTMLIrButtonElement;
    };
    interface HTMLIrCheckboxElement extends Components.IrCheckbox, HTMLStencilElement {
    }
    var HTMLIrCheckboxElement: {
        prototype: HTMLIrCheckboxElement;
        new (): HTMLIrCheckboxElement;
    };
    interface HTMLIrGuestInfoElement extends Components.IrGuestInfo, HTMLStencilElement {
    }
    var HTMLIrGuestInfoElement: {
        prototype: HTMLIrGuestInfoElement;
        new (): HTMLIrGuestInfoElement;
    };
    interface HTMLIrIconElement extends Components.IrIcon, HTMLStencilElement {
    }
    var HTMLIrIconElement: {
        prototype: HTMLIrIconElement;
        new (): HTMLIrIconElement;
    };
    interface HTMLIrInputTextElement extends Components.IrInputText, HTMLStencilElement {
    }
    var HTMLIrInputTextElement: {
        prototype: HTMLIrInputTextElement;
        new (): HTMLIrInputTextElement;
    };
    interface HTMLIrSelectElement extends Components.IrSelect, HTMLStencilElement {
    }
    var HTMLIrSelectElement: {
        prototype: HTMLIrSelectElement;
        new (): HTMLIrSelectElement;
    };
    interface HTMLIrSidebarElement extends Components.IrSidebar, HTMLStencilElement {
    }
    var HTMLIrSidebarElement: {
        prototype: HTMLIrSidebarElement;
        new (): HTMLIrSidebarElement;
    };
    interface HTMLIrSpanElement extends Components.IrSpan, HTMLStencilElement {
    }
    var HTMLIrSpanElement: {
        prototype: HTMLIrSpanElement;
        new (): HTMLIrSpanElement;
    };
    interface HTMLIrSwitchElement extends Components.IrSwitch, HTMLStencilElement {
    }
    var HTMLIrSwitchElement: {
        prototype: HTMLIrSwitchElement;
        new (): HTMLIrSwitchElement;
    };
    interface HTMLIrTextareaElement extends Components.IrTextarea, HTMLStencilElement {
    }
    var HTMLIrTextareaElement: {
        prototype: HTMLIrTextareaElement;
        new (): HTMLIrTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "ir-button": HTMLIrButtonElement;
        "ir-checkbox": HTMLIrCheckboxElement;
        "ir-guest-info": HTMLIrGuestInfoElement;
        "ir-icon": HTMLIrIconElement;
        "ir-input-text": HTMLIrInputTextElement;
        "ir-select": HTMLIrSelectElement;
        "ir-sidebar": HTMLIrSidebarElement;
        "ir-span": HTMLIrSpanElement;
        "ir-switch": HTMLIrSwitchElement;
        "ir-textarea": HTMLIrTextareaElement;
    }
}
declare namespace LocalJSX {
    interface IrButton {
        "btn_block"?: boolean;
        "btn_color"?: string;
        "btn_disabled"?: boolean;
        "btn_size"?: string;
        "btn_type"?: string;
        "icon"?: string;
        "name"?: string;
        "onClickHanlder"?: (event: IrButtonCustomEvent<any>) => void;
        "text"?: any;
    }
    interface IrCheckbox {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onCheckboxChange"?: (event: IrCheckboxCustomEvent<boolean>) => void;
    }
    interface IrGuestInfo {
        "data"?: guestInfo;
        "onGetSetupData"?: (event: IrGuestInfoCustomEvent<any>) => void;
        "onSubmitForm"?: (event: IrGuestInfoCustomEvent<guestInfo>) => void;
        "setupDataCountries"?: selectOption[];
        "setupDataCountriesCode"?: selectOption[];
    }
    interface IrIcon {
        "icon"?: string;
    }
    interface IrInputText {
        "LabelAvailable"?: boolean;
        "inputStyle"?: boolean;
        "label"?: string;
        "name"?: string;
        "onTextChange"?: (event: IrInputTextCustomEvent<any>) => void;
        "placeholder"?: string;
        "required"?: boolean;
        "submited"?: boolean;
        "text"?: any;
        "type"?: string;
    }
    interface IrSelect {
        "LabelAvailable"?: boolean;
        "data"?: selectOption[];
        "firstOption"?: string;
        "label"?: string;
        "name"?: string;
        "onSelectChange"?: (event: IrSelectCustomEvent<any>) => void;
        "required"?: boolean;
        "selectStyle"?: boolean;
        "selectedValue"?: any;
        "submited"?: boolean;
    }
    interface IrSidebar {
        "name"?: string;
        "open"?: boolean;
        "side"?: 'right' | 'left';
    }
    interface IrSpan {
        "text"?: any;
    }
    interface IrSwitch {
        "baseClass"?: string;
        "classOn"?: string;
        "colorOn"?: string;
        "disabled"?: boolean;
        "handleWidth"?: string | 'auto';
        "indeterminate"?: boolean;
        "inverse"?: boolean;
        "labelOff"?: string;
        "labelOn"?: string;
        "labelText"?: string;
        "labelWidth"?: string | 'auto';
        "offClass"?: string;
        "offColor"?: string;
        "onValueChange"?: (event: IrSwitchCustomEvent<boolean>) => void;
        "radioAllOff"?: boolean;
        "readonly"?: boolean;
        "size"?: string | 'mini' | 'small' | 'normal' | 'large';
        "switch_animate"?: boolean;
        "value"?: boolean;
        "wrapperClass"?: string;
    }
    interface IrTextarea {
        "cols"?: number;
        "label"?: string;
        "placeholder"?: string;
        "rows"?: number;
        "text"?: string;
    }
    interface IntrinsicElements {
        "ir-button": IrButton;
        "ir-checkbox": IrCheckbox;
        "ir-guest-info": IrGuestInfo;
        "ir-icon": IrIcon;
        "ir-input-text": IrInputText;
        "ir-select": IrSelect;
        "ir-sidebar": IrSidebar;
        "ir-span": IrSpan;
        "ir-switch": IrSwitch;
        "ir-textarea": IrTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ir-button": LocalJSX.IrButton & JSXBase.HTMLAttributes<HTMLIrButtonElement>;
            "ir-checkbox": LocalJSX.IrCheckbox & JSXBase.HTMLAttributes<HTMLIrCheckboxElement>;
            "ir-guest-info": LocalJSX.IrGuestInfo & JSXBase.HTMLAttributes<HTMLIrGuestInfoElement>;
            "ir-icon": LocalJSX.IrIcon & JSXBase.HTMLAttributes<HTMLIrIconElement>;
            "ir-input-text": LocalJSX.IrInputText & JSXBase.HTMLAttributes<HTMLIrInputTextElement>;
            "ir-select": LocalJSX.IrSelect & JSXBase.HTMLAttributes<HTMLIrSelectElement>;
            "ir-sidebar": LocalJSX.IrSidebar & JSXBase.HTMLAttributes<HTMLIrSidebarElement>;
            "ir-span": LocalJSX.IrSpan & JSXBase.HTMLAttributes<HTMLIrSpanElement>;
            "ir-switch": LocalJSX.IrSwitch & JSXBase.HTMLAttributes<HTMLIrSwitchElement>;
            "ir-textarea": LocalJSX.IrTextarea & JSXBase.HTMLAttributes<HTMLIrTextareaElement>;
        }
    }
}
