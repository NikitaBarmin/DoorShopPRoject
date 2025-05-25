import type { ReactNode } from 'react';

export interface FeedbackProps  {
    children?: ReactNode;
    className?: string;
    onToggle: () => void; // Функция для переключения состояния модального окна (из MainLayout)
    show: boolean;
}