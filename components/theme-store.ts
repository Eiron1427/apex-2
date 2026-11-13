"use client";

import { useSyncExternalStore } from "react";
import type { Theme } from "@/types";

const THEME_STORAGE_KEY = 'theme';
let theme: Theme = 'light';
let mounted:boolean = false;

const listeners = new Set<() => void>();


const readDomTheme = () : Theme => {
    return document.documentElement.dataset.theme == 'dark' ? 'dark' : 'light';
}

const setTheme = (next: Theme) => {
    theme = next;
    document.documentElement.dataset.theme = next;

    try {
        localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {}

    listeners.forEach((listeners) => listeners());

}

const subscribeListener = (listener: () => void) :  () => void => {
    listeners.add(listener);

    if (!mounted) {
        mounted = true;
        theme = readDomTheme();
    }

    return () => {
        listeners.delete(listener);
    } ;
}

const getSnapshot = () : Theme => {
    return theme;
}

const getServerSnapshot = () : Theme => {
    return 'light';
}

export const useTheme = () => {
    const theme = useSyncExternalStore(subscribeListener, getSnapshot, getServerSnapshot);

    return {
        theme,
        mounted,
        toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark')
    };
}