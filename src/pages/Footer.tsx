import { LuCopyright } from "react-icons/lu"

export default function Footer() {
    return (
        <footer className="bg-card/95 text-muted-foreground py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">
                    <LuCopyright className="inline-block mb-1 mr-1" />
                    2025 Axel Roubaud. Tous droits réservés.
                </p>
            </div>
        </footer>
    )
}
