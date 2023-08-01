import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps {
    as?: any;
    buttonColor?: string;
    textColor?: string;
    href?: string;
    external?: boolean;
    variant?: string;
    buttonHeight?: number;
    buttonWidth?: number | null;
    borderRadius?: number;
    shadow?: boolean;
    border?: boolean;
    loading?: boolean;
    disabled?: boolean;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    className?: string;
    hint?: string;
    transform?: "uppercase";
    children: string;
    onClick?: Function;
}
declare const Button: ({ as, buttonColor, textColor, href, external, variant, buttonHeight, buttonWidth, borderRadius, shadow, border, loading, disabled, startIcon, endIcon, className, hint, transform, children, onClick, }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface FlexProps {
    children: React.ReactNode;
    display?: "flex" | "inline-flex";
    alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "stretch";
    flexDirection?: "row" | "column" | "column-reverse";
    wrap?: boolean;
    columnGap?: {
        sm?: number;
        lg?: number;
    };
    rowGap?: {
        sm?: number;
        lg?: number;
    };
    fullHeight?: boolean;
    fullWidth?: boolean;
    className?: string;
    spacing?: {
        sm?: number;
        lg?: number;
    };
    center?: boolean;
    onClick?: Function;
}
declare const Flex: ({ children, display, alignItems, justifyContent, flexDirection, wrap, columnGap, rowGap, fullHeight, fullWidth, className, spacing, center, onClick, }: FlexProps) => react_jsx_runtime.JSX.Element;

interface BoxProps {
    children: React.ReactNode;
    backgroundColor?: string | false;
    padding?: {
        sm?: number[];
        lg?: number[];
    };
    borderRadius?: {
        sm?: number[];
        lg?: number[];
    };
    border?: string | false;
    borderWidth?: number | false;
    opacity?: number | false;
    shadow?: string | false;
    overflow?: "hidden" | "visible" | "scroll";
    spacing?: {
        sm?: number;
        lg?: number;
    };
    className?: string;
    onClick?: Function;
}
declare const Box: ({ children, backgroundColor, padding, borderRadius, borderWidth, border, opacity, shadow, overflow, className, spacing, onClick, }: BoxProps) => react_jsx_runtime.JSX.Element;

interface TextProps {
    tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    variant: string;
    children: React.ReactNode;
    mobile?: boolean | false;
    transform?: "uppercase" | "capitalize" | "lowercase" | false;
    decoration?: "underline" | "lineThrough";
    fontWeight?: 400 | 500 | 600 | 700 | 800 | 900;
    color?: string | false;
    className?: string;
    align?: "center" | "left" | "right" | false;
    spacing?: {
        sm?: number;
        lg?: number;
    };
    fontFamily?: string;
}
declare const Text: ({ tagName, mobile, transform, decoration, fontWeight, variant, color, className, align, spacing, fontFamily, children, }: TextProps) => react_jsx_runtime.JSX.Element;

interface GridProps {
    children: React.ReactNode;
    column: {
        sm?: number;
        lg?: number;
    };
    gutter: {
        sm: number[];
        lg: number[];
    };
    className?: string;
    spacing?: {
        sm?: number;
        lg?: number;
    };
}
declare const Grid: ({ children, column, gutter, className, spacing, }: GridProps) => react_jsx_runtime.JSX.Element;

interface ContainerProps {
    children: React.ReactNode;
}
declare const Container: ({ children }: ContainerProps) => react_jsx_runtime.JSX.Element;

interface RowProps {
    padding?: number;
    position?: "space-between" | "center" | "flex-start" | "flex-end";
    align?: "center";
    children: React.ReactNode;
}
declare const Row: ({ children, padding, position, align }: RowProps) => react_jsx_runtime.JSX.Element;

interface ColumnProps {
    column: number;
    gutter: number;
    children: React.ReactNode;
}
declare const Column: ({ children, column, gutter }: ColumnProps) => react_jsx_runtime.JSX.Element;

interface AccordionProps {
    children: JSX.Element[];
    active?: boolean;
    customClass?: string;
    maxHeight?: number;
    onToggle?: Function;
    listeners?: any[];
    reverse?: boolean;
}
declare const Accordion: ({ children, active, customClass, maxHeight, onToggle, listeners, reverse, }: AccordionProps) => react_jsx_runtime.JSX.Element;
interface AccordionContentProps {
    children: React.ReactNode;
}
declare const AccordionContent: ({ children }: AccordionContentProps) => react_jsx_runtime.JSX.Element;
interface AccordionButtonProps {
    children: React.ReactNode;
}
declare const AccordionButton: ({ children }: AccordionButtonProps) => react_jsx_runtime.JSX.Element;

export { Accordion, AccordionButton, AccordionContent, Box, Button, Column, Container, Flex, Grid, Row, Text };
