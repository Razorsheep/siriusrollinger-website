import { X, Menu, ChevronDown, CircleHelpIcon, CircleIcon, CircleCheckIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Link } from "@inertiajs/react"


export function HeaderNew({ settings }: { settings: any }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    const navigationItems = [
        { href: "/", label: "Forside" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "Om" },
    ];

    const serviceItems = [
        { href: "#", label: "Førstehjælpskurser" },
        { href: "#", label: "Foredrag" },
        { href: "#", label: "Førstehjælpsgrej" },
        { href: "#", label: "Guides og gode råd" },
    ];

    return (
        <header className="bg-white shadow-sm border-b border-red-100 top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-30">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/images/logo.png"
                                alt="Førstehjælp til Hunde Logo"
                                className="h-30 w-auto"
                            />
                            <div className="ml-3">
                                <h1 className="text-xl font-bold text-red-700">Førstehjælp til Hunde</h1>
                                <p className="text-sm text-red-600">Din hunds sikkerhed kommer først</p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="viewport:{false}">
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>

                        {/* Services Dropdown */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Ydelser</NavigationMenuTrigger>
                            <NavigationMenuContent>
                            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    {serviceItems.map((item) => (
                                        <li key={item.href} className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={item.href}
                                                    className="text-red-700 hover:text-red-900 cursor-pointer font-medium text-md block py-2 px-3 rounded-md hover:bg-red-50 transition-colors"
                                                >
                                                    {item.label}
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="#" className="flex-row items-center gap-2">
                                                <CircleHelpIcon />
                                                Backlog
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#" className="flex-row items-center gap-2">
                                                <CircleIcon />
                                                To Do
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#" className="flex-row items-center gap-2">
                                                <CircleCheckIcon />
                                                Done
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>


                    </NavigationMenu>

                    {/* Mobile Navigation */}
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden text-red-700 hover:text-red-900"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Åbn menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-white">
                            <div className="py-6">
                                <div className="flex items-center mb-6">
                                    <img
                                        src="/images/logo.png"
                                        alt="Førstehjælp til Hunde Logo"
                                        className="h-16 w-auto"
                                    />
                                    <div className="ml-3">
                                        <h2 className="text-lg font-bold text-red-700">Førstehjælp til Hunde</h2>
                                        <p className="text-sm text-red-600">Din hunds sikkerhed kommer først</p>
                                    </div>
                                </div>

                                <Separator className="mb-6" />

                                <nav className="space-y-4">
                                    {navigationItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="block text-red-700 hover:text-red-900 font-medium text-lg"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}

                                    <Separator className="my-4" />

                                    {/* Mobile Services Section */}
                                    <div>
                                        <Button
                                            variant="ghost"
                                            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                            className="flex items-center justify-between w-full text-red-700 hover:text-red-900 font-medium text-lg p-0 h-auto"
                                        >
                                            Ydelser
                                            <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                                        </Button>
                                        {isServicesDropdownOpen && (
                                            <div className="ml-4 mt-3 space-y-2">
                                                {serviceItems.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="block text-red-600 hover:text-red-800 text-base"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
