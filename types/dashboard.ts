import { ReactNode } from 'react';

export type OrderStatus = "completed" | "processing" | "shipped" | "pending";

export type StatItem = {
    title: string;
    value: string;
    trend: string;
    positive: boolean;
    icon: ReactNode;
}

export type WeeklyDataPoint = {
    day:string;
    value:number;
}

export type OrderItem = {
    id:string;
    customer:string;
    status:OrderStatus;
    amount:string;
    date:string;
}