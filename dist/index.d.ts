import * as react_jsx_runtime from 'react/jsx-runtime';

type Direction = "slide-up" | "slide-down" | "fade" | "zoom";
type Size = "sm" | "md" | "lg";
type ButtonColor = "primary" | "secondary" | "success" | "error" | "warning" | "info";
type Variant = "contained" | "outline" | "text";
interface IModal {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    size?: Size;
    animationType?: Direction;
    width?: number;
    disableBackdropClick?: boolean;
}
interface IChildren {
    children: React.ReactNode;
}
interface ITitle {
    children: React.ReactNode;
    fontSize?: string;
    color?: string;
    textAlign?: "left" | "center";
    fontWidth?: "300" | "400" | "500" | "600" | "700" | "800" | "900";
}
interface IButton {
    children: React.ReactNode;
    color?: ButtonColor;
    size?: Size;
    animationOnHover?: Direction;
    disabled?: boolean;
    onClose?: () => void;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    loading?: boolean;
    variant?: Variant;
}
interface IDivider {
    color?: string;
    height?: string;
}

declare const Modal: ({ open, onClose, children, size, animationType, width, disableBackdropClick, }: IModal) => react_jsx_runtime.JSX.Element;
declare const ModalHeader: ({ children }: IChildren) => react_jsx_runtime.JSX.Element;
declare const ModalTitle: ({ children, fontSize, textAlign, color, fontWidth, }: ITitle) => react_jsx_runtime.JSX.Element;
declare const ModalDescription: ({ children, color, fontSize, textAlign, fontWidth, }: ITitle) => react_jsx_runtime.JSX.Element;
declare const ModalFooter: ({ children }: IChildren) => react_jsx_runtime.JSX.Element;
declare const ModalCancelButton: ({ children, color, size, animationOnHover, disabled, onClose, startIcon, endIcon, loading, variant, }: IButton) => react_jsx_runtime.JSX.Element;
declare const ModalSuccessButton: ({ children, size, color, animationOnHover, disabled, startIcon, endIcon, loading, variant, }: IButton) => react_jsx_runtime.JSX.Element;
declare const ModalDivider: ({ color, height }: IDivider) => react_jsx_runtime.JSX.Element;

export { Modal, ModalCancelButton, ModalDescription, ModalDivider, ModalFooter, ModalHeader, ModalSuccessButton, ModalTitle };
