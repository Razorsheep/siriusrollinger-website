import { Menu, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Link } from "@inertiajs/react"
import { NavigationData, NavigationItem, NavigationGroup } from "@/types"

export function Header({ navigationItems }: { navigationItems: NavigationData[] }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    // Extract main navigation items (excluding the services group)
    const mainNavigationItems = navigationItems.filter(item => item.type === 'item') as NavigationItem[];
    
    // Extract services from the services group
    const servicesGroup = navigationItems.find(item => item.type === 'group' && item.label === 'Ydelser') as NavigationGroup;
    const serviceItems = servicesGroup?.items || [];

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
                                <h1 className="text-xl font-bold text-red-700">Førstehjælp til hund</h1>
                                <p className="text-sm text-red-600">Viden og træning redder liv</p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {mainNavigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-red-700 hover:text-red-900 font-medium text-lg transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Services Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button 
                                    variant="ghost" 
                                    className="flex items-center text-red-700 hover:text-red-900 font-medium text-lg p-0 h-auto"
                                >
                                    Ydelser
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                                align="start" 
                                className="w-64 bg-white border-red-200"
                                sideOffset={8}
                            >
                                {serviceItems.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild>
                                        <Link
                                            href={item.href}
                                            className="text-red-700 hover:text-red-900 cursor-pointer font-medium text-lg"
                                        >
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>

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
                                        <h2 className="text-lg font-bold text-red-700">Førstehjælp til hund</h2>
                                        <p className="text-sm text-red-600">Viden og træning redder liv</p>
                                    </div>
                                </div>
                                
                                <Separator className="mb-6" />
                                
                                <nav className="space-y-4">
                                    {mainNavigationItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="block text-red-700 hover:text-red-900 font-medium text-lg ml-4"
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
                                                        className="block text-red-600 hover:text-red-800 text-lg"
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
