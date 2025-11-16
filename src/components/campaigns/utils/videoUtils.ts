// Utility functions for video handling
export const formatYouTubeUrl = (url: string): string => {
  // Handle youtu.be format
  if (url.includes('youtu.be')) {
    return url.replace('youtu.be/', 'youtube.com/watch?v=');
  }
  // Handle youtube.com format
  if (url.includes('youtube.com/watch')) {
    return url;
  }
  // Handle video ID only
  if (url.includes('youtube.com/v/')) {
    return url.replace('youtube.com/v/', 'youtube.com/watch?v=');
  }
  return url;
};

export const openYouTubeVideo = (url: string): void => {
  const formattedUrl = formatYouTubeUrl(url);
  window.open(formattedUrl, '_blank', 'noopener,noreferrer');
};