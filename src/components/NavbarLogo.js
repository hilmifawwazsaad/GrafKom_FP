'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/app/globals.css'; // Sesuaikan dengan file CSS Anda jika perlu

const NavbarLogo = ({ children }) => {
    return (
        <div className="flex flex-col px-24 min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <div className="py-4 shadow-md flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Link href="/"> {/* Link ke halaman utama */}
                        <img
                            src="/ARG.png"
                            alt="Profile"
                            className="w-12 h-12 object-contain cursor-pointer" // Menambahkan cursor pointer agar terlihat interaktif
                        />
                    </Link>
                </div>
            </div>
            {/* Main Content */}
            <main className="min-h-screen">{children}</main>
        </div>
    );
};

export default NavbarLogo;
