
export interface FormField {
    label: string;
    placeholder?: string;
    field: string;
    width?: number;
    inputType: InputType;
    default?: string | number | boolean;
    validators?: FieldValidator[];
}

export enum InputType {
    textbox,
    selectbox
}

export enum FieldValidator {
    required
}
