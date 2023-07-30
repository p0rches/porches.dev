import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Check if the initial media query matches and set the state accordingly
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Add event listener to listen for changes in the media query
    media.addEventListener("change", handleMediaChange);

    // Cleanup the event listener when the component is unmounted
    return () => media.removeEventListener("change", handleMediaChange);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
