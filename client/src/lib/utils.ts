import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string | number): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(numPrice);
}

export function generateQRCode(data: string): string {
  // Simple QR code pattern generator for visual purposes
  const patterns = [
    "████████  ████████",
    "█      █  █      █",
    "█ ████ █  █ ████ █",
    "█ ████ █  █ ████ █",
    "█ ████ █  █ ████ █",
    "█      █  █      █",
    "████████  ████████",
    "        ██        ",
    "██████    ██████  ",
    "    ████    ████  ",
    "██████  ██████    ",
    "        ██        ",
    "████████  ████████",
    "█      █  █      █",
    "█ ████ █  █ ████ █",
    "█ ████ █  █ ████ █",
    "█ ████ █  █ ████ █",
    "█      █  █      █",
    "████████  ████████",
  ];
  
  return patterns.join('\n');
}

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c; // Distance in km
  return d;
}

export function formatDistance(distance: number): string {
  if (distance < 1) {
    return `${Math.round(distance * 1000)}m`;
  }
  return `${distance.toFixed(1)}km`;
}
