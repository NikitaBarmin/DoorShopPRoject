import type { HTMLAttributes } from 'react';

export interface MobileNavProps extends HTMLAttributes <HTMLHeadingElement> {
	isActive: boolean;
	onClose: () => void;
}