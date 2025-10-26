/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { AlertTriangle, Loader2, RefreshCcw, Upload } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { SelectImage } from "@/db/schema";
import { UseFormReturn } from "react-hook-form";

export function CoverImageField({ form }: {
    form: UseFormReturn<{
        title: string;
        coverImage: string;
        tags?: string[] | undefined;
    }, unknown, undefined>
}) {
    const [open, setOpen] = useState(false);
    const [fileName, setFileName] = useState<string>("")
    const [images, setImages] = useState<SelectImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchImages = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/images");
            if (!response.ok) {
                throw new Error("Failed to fetch images");
            }
            const data = await response.json();
            setImages(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);


    return (
        <Popover modal open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" type="button" className="w-full justify-start">
                    <Upload className="mr-2 h-4 w-4" />
                    {fileName || "Choose a file"}
                </Button>
            </PopoverTrigger>

            <PopoverContent
                onPointerDownOutside={() => {
                    setOpen(false);
                }}
                onEscapeKeyDown={() => {
                    setOpen(false);
                }} className="min-w-[450px] py-2 px-3 max-w-[90vw]">
                <div className="max-h-[80vh] min-h-[280px] rounded-lg bg-muted text-muted-foreground overflow-y-scroll">
                    {loading ? (
                        <div className="flex justify-center items-center size-full">
                            <Loader2 className="mr-2 size-6 animate-spin" />
                        </div>
                    ) : error ? (
                        <div className="flex flex-col items-center text-center text-red-500">
                            <AlertTriangle className="size-6 mb-2" />
                            <p className="text-sm font-medium">{error}</p>
                            <Button
                                onClick={fetchImages}
                                variant="ghost"
                                size="sm"
                                className="mt-3 flex items-center gap-1"
                            >
                                <RefreshCcw className="size-4" /> Retry
                            </Button>
                        </div>
                    ) : (<div className="items-start justify-center grid grid-cols-3 [repeat(auto-fit,112px)] gap-2">
                        {images?.map((image) => (
                            <div
                                key={image.id}
                                onClick={() => {
                                    // ✅ Set the form field value here
                                    form.setValue("coverImage", image.url);
                                    setFileName(image.url.split("/").pop() || "Selected image");
                                    setOpen(false);
                                }}
                                className="px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 m-1 relative flex aspect-square cursor-pointer items-center justify-center rounded-md"
                            >
                                <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                                    <img
                                        sizes="(max-width: 768px) 320px, (max-width: 1200px) 240px, 240px"
                                        src={image.url}
                                        alt=""
                                        className="object-cover object-center size-full"
                                    />
                                </span>
                            </div>
                        ))}
                    </div>)}
                </div>
                {/* <div className="space-y-3">
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) {
                                  field.onChange(file)
                                  setFileName(file.name)
                                }
                              }}
                            />
                            {fileName && (
                              <p className="text-sm text-muted-foreground truncate">
                                Selected: {fileName}
                              </p>
                            )}
                          </div> */}
            </PopoverContent>
        </Popover>

    )
}