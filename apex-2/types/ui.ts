import { ReactNode } from "react";

export type Theme = 'light' | 'dark';

export type layoutProps = {
    children: ReactNode
}

export type PageHeaderProps = {
    title: string;
    description?: string;
}

export type PageNodeProps = {
    title: string;
    description: string;
}

export type AvatarProps = {
    initial: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'bg-primary' | 'neutral';
}

export type CardProps = {
    children: ReactNode;
    className?: string;
}

export type SettingTaggleProps = {
    label?: string;
    description: string;
    isChecked: boolean;
}

export type FormFieldProps = {
    label?: string;
    htmlFor?: string;
    children: ReactNode;
}

