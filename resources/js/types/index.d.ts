import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

// Navigation types for the new structure
export interface NavigationItem {
    label: string;
    href: string;
    type: string;
}

export interface NavigationGroup {
    label: string;
    type: string;
    items: NavigationItem[];
}

export type NavigationData = NavigationItem | NavigationGroup;

export interface TiptapContent {
    type: string;
    content?: TiptapContent[];
    text?: string;
    marks?: Array<{ type: string }>;
    attrs?: Record<string, any>;
}

export interface BlogEntry {
    id: number;
    title: string;
    slug: string;
    content: TiptapContent | string;
    excerpt?: string;
    category: string;
    author: string;
    date: string;
    image?: string;
    image_url?: string;
    read_time?: number;
    status: string;
}

export interface ServicePage {
    id: number;
    title: string;
    slug: string;
    content: TiptapContent | string;
    page_type: string;
    status: string;
    next_event?: {
        title: string;
        date: string;
        time: string;
        location: string;
        description: string;
        registration_link?: string;
    };
    photos?: string[];
    contact_info?: {
        phone?: string;
        email?: string;
        website?: string;
    };
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    blogEntries?: BlogEntry[];
    blogEntry?: BlogEntry;
    categories?: string[];
    navigationItems?: NavigationData[];
    settings?: any;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    admin: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
