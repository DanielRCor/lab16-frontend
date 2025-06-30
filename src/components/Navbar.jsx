'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (href) => pathname === href;

  // Nuevo diseño: fondo blanco, bordes suaves, icono cruz farmacia y verde-acqua
  return (
    <nav className="bg-white border-b-2 border-emerald-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="text-emerald-600 text-2xl">✚</span>
            <span className="text-emerald-700 text-xl font-bold tracking-wide">
              Sistema de Farmacia
            </span>
          </div>

          <div className="hidden md:block">
            <ul className="ml-10 flex items-center space-x-4">
              <NavLink href="/" active={isActive('/')}>
                Inicio
              </NavLink>
              <NavLink href="/productos" active={isActive('/productos')}>
                Medicamentos
              </NavLink>
              <NavLink href="/categorias" active={isActive('/categorias')}>
                Categorías
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, active, children }) {
  return (
    <li>
      <Link href={href} passHref>
        <span className={`
          px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition 
          ${active 
            ? "bg-emerald-100 text-emerald-700 border border-emerald-400 shadow-md" 
            : "text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"}
        `}>
          {children}
        </span>
      </Link>
    </li>
  );
}