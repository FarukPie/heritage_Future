import Navbar from "@/components/Navbar";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 text-foreground overflow-x-hidden">
            <Navbar />

            <div className="pt-32 pb-12 container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Proje <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-turquoise to-secondary-sand">Galerisi</span>
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    Side Antik Kenti'nden laboratuvara, oradan da çocukların gülümsemesine uzanan yolculuğumuzdan kareler.
                </p>
            </div>

            <GalleryGrid />


        </main>
    );
}
