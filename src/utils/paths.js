// Utility function to handle asset paths for both local development and production
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, use the base URL from import.meta.env
  if (import.meta.env.PROD) {
    const baseUrl = import.meta.env.BASE_URL || '/';
    // Ensure baseUrl ends with slash and cleanPath doesn't start with slash
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
    return normalizedBase + cleanPath;
  }
  
  // In development, use the path as-is with leading slash
  return '/' + cleanPath;
}

// Utility function to handle internal page links
export function getPagePath(path) {
  // Handle root path specially
  if (path === '/' || path === '') {
    if (import.meta.env.PROD) {
      return import.meta.env.BASE_URL || '/';
    }
    return '/';
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, use the base URL from import.meta.env
  if (import.meta.env.PROD) {
    const baseUrl = import.meta.env.BASE_URL || '/';
    // Ensure baseUrl ends with slash and cleanPath doesn't start with slash
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
    return normalizedBase + cleanPath;
  }
  
  // In development, use the path as-is with leading slash
  return '/' + cleanPath;
} 