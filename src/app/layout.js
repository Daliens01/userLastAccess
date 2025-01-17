import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alumnos ESI",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">  
    <body className={inter.className}>
    <main className={styles.main+ " dark text-foreground bg-background"}>
    <div className={styles.description}>
    <p>Alumnos sin acceder a plataforma Esiapi </p>
    <div>
    <Link rel="noopener noreferrer" href="/">Inicio</Link>
    </div>
    </div>
    </main>
    {children}
    </body>
    </html>
  );
}
