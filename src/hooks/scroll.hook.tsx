"use client";
import React from "react";

export function useScroll() {
    const [scrollPosition, setScrollPosition] = React.useState({ top: 0, left: 0, right: 0, bottom: 0, });

    React.useEffect(() => {
        const root = document.querySelector("#root")!;

        function handleScroll(ev: Event) {
            const { clientHeight, clientWidth, scrollTop, scrollLeft, scrollWidth, scrollHeight, } = root;
            setScrollPosition({ top: scrollTop, left: scrollLeft, right: scrollWidth - clientWidth - scrollLeft, bottom: scrollHeight - clientHeight - scrollTop, });
        };

        root.addEventListener("scroll", handleScroll);
        return () => root.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollPosition;
}
