import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Flame, Zap, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Community() {
    const communityImage = PlaceHolderImages.find(img => img.id === 'community-app-screenshot');

    return (
        <section className="bg-[#0A0A0A] text-white py-12 md:py-24 relative">
            <div 
                className="absolute inset-0 bg-repeat" 
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231A1A1A' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")"
                }}
            ></div>
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                            Get 12 Testers for <span className="text-green-400">FREE</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Join 20,000+ developers using our community app
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="bg-white/10 p-2 rounded-lg">
                                    <Flame className="w-5 h-5 text-orange-400" />
                                </div>
                                <span className="font-medium">Completely FREE testing</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white/10 p-2 rounded-lg">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                </div>
                                <span className="font-medium">20,000+ testers</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white/10 p-2 rounded-lg">
                                    <Star className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="font-medium">4.6 rating with 15,000+ apps published</span>
                            </li>
                        </ul>
                        <Button size="lg" className="bg-green-400 text-black hover:bg-green-500 w-full sm:w-auto">
                            Download Free App
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        {communityImage && (
                             <Image
                                src={communityImage.imageUrl}
                                alt={communityImage.description}
                                data-ai-hint={communityImage.imageHint}
                                width={350}
                                height={700}
                                className="rounded-2xl shadow-2xl"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
