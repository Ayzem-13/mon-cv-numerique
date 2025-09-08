import { LuCopyright } from "react-icons/lu"

export default function Footer() {

    return (
        <footer className="bg-white/95 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">
                    <LuCopyright className="inline-block mb-1 mr-1" />
                    2025 Axel Roubaud. Tous droits réservés.
                </p>
            </div>
        </footer>
    )
}
