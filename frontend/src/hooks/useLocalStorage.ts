import { useState, useEffect, useCallback } from "react";

export const useLocalStorage = <T>(key: string) => {
    const [state, setState] = useState<T | null>(() => {
        const exValue = localStorage.getItem(key);
        if (exValue) {
            return JSON.parse(exValue) as T;
        }
        return null;
    });

    // save the new value when it changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    // memoize a storage watcher callback back because everything in hooks should be memoized
    const storageWatcher = useCallback(
        (e: StorageEvent) => {
            if (e.newValue) {
                // update ours if we
                setState(currState => {
                    const newDat = JSON.parse(e.newValue || "null");
                    return newDat == state ? newDat : currState;
                });
            }
        },
        [state],
    );

    // install the watcher
    useEffect(() => {
        window.addEventListener("storage", storageWatcher);
        // stop listening on remove
        return () => {
            window.removeEventListener("storage", storageWatcher);
        };
    }, [state]);

    return { state, setState };
};
