import { Menu, ChevronDown, Moon, Sun } from "lucide-react"
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
// import { useAppearance } from "@/hooks/use-appearance"

export function Header({ navigationItems }: { navigationItems: NavigationData[] }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    // const { appearance, updateAppearance } = useAppearance();

    // const toggleAppearance = () => {
    //     const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    //     const isCurrentlyDark = appearance === 'dark' || (appearance === 'system' && prefersDark);
    //     updateAppearance(isCurrentlyDark ? 'light' : 'dark');
    // };

    // Extract main navigation items (excluding the services group)
    const mainNavigationItems = navigationItems.filter(item => item.type === 'item') as NavigationItem[];
    
    // Extract services from the services group
    const servicesGroup = navigationItems.find(item => item.type === 'group' && item.label === 'Ydelser') as NavigationGroup;
    const serviceItems = servicesGroup?.items || [];

    return (
        <header className="bg-background shadow-sm border-b border-border top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-30">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            {/* <img 
                                src="/images/logo.png" 
                                alt="Førstehjælp til Hunde Logo" 
                                className="h-30 w-auto" 
                            /> */}
                            <div className="ml-3">
                                <h1 className="text-xl font-bold text-primary">Sirius Rollinger</h1>
                                <p className="text-sm text-muted-foreground">Mental og fysisk trivsel for børn og unge gennem fællesskab og natur</p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {mainNavigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-primary hover:text-primary/80 font-medium text-lg transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                    </nav>

                    {/* Mobile Navigation */}
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="icon"
                                className="lg:hidden text-primary hover:text-primary/80"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Åbn menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-background">
                            <div className="py-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center">
                                        {/* <img 
                                            src="/images/logo.png" 
                                            alt="Førstehjælp til Hunde Logo" 
                                            className="h-16 w-auto" 
                                        /> */}
                                        <div className="ml-3">
                                            <h2 className="text-lg font-bold text-primary">Sirius Rollinger</h2>
                                            <p className="text-sm text-muted-foreground">Mental og fysisk trivsel for børn og unge gennem fællesskab og natur</p>
                                        </div>
                                    </div>
                                    {/* <Button
                                        type="button"
                                        onClick={toggleAppearance}
                                        variant="ghost"
                                        size="icon"
                                        aria-label="Skift tema"
                                        className="text-red-700 hover:text-red-900 dark:text-red-300 dark:hover:text-red-200"
                                    >
                                        <Sun className="h-5 w-5 hidden dark:block" />
                                        <Moon className="h-5 w-5 dark:hidden" />
                                    </Button> */}
                                </div>
                                
                                <Separator className="mb-6" />
                                
                                <nav className="space-y-4">
                                    {mainNavigationItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="block text-primary hover:text-primary/80 font-medium text-lg ml-4"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                    
                                    <Separator className="my-4" />
    
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
