'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import '../app/globals.css'; // Sesuaikan dengan file CSS Anda jika perlu

const Navbar = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', route: '/' },
        { id: 'about', label: 'About', route: '/about' },
        { id: 'features', label: 'Features', route: '/features' },
    ];

    return (
        <html lang="en">
            <body>
                <div className="flex flex-col px-24 min-h-screen bg-[var(--background)] text-[var(--foreground)]">
                    {/* Navbar */}
                    <header className="py-4 shadow-md flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <img
                                src="/ARG.png"
                                alt="Profile"
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                        <nav className="flex space-x-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => router.push(item.route)}
                                    className={`flex items-center hover:text-[#708090] transition-colors duration-150 ease-in-out ${pathname === item.route ? 'text-[#FF5A5F] font-medium' : ''
                                        }`}
                                >
                                    <span className="ml-2">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </header>

                    {/* Main Content */}
                    <main className="min-h-screen">{children}</main>
                </div>
            </body>
        </html>
    );
};

export default Navbar;
