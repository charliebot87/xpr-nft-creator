// Client-side only WebAuth loader
// This avoids the ESM import crash during SSR on Vercel

let webAuthLoaded = false;
let WebAuthClass: any = null;

export async function loadWebAuth() {
  if (webAuthLoaded) return WebAuthClass;
  if (typeof window === 'undefined') return null; // SSR guard

  try {
    const mod = await import('@proton/ual-webauth');
    WebAuthClass = mod.WebAuth;
    webAuthLoaded = true;
    return WebAuthClass;
  } catch (e) {
    console.warn('WebAuth failed to load:', e);
    return null;
  }
}

export function getWebAuthClass() {
  return WebAuthClass;
}
