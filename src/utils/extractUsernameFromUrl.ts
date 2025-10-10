export const extractUsernameFromUrl = (url: string): string => {
  try {
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname.replace(/\/$/, "");
    const segments = pathname.split("/");
    const lastSegment = segments.pop();

    return lastSegment || parsedUrl.hostname.replace("www.", "");
  } catch {
    return url;
  }
};
