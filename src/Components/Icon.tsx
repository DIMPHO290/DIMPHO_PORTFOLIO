import React from 'react';
import { createLucideIcon } from 'lucide-react';

// Helper to wrap lucide-react icons.
// Note: this file exists to centralize any future build workarounds.
export { createLucideIcon };

export type LucideIcon = React.ComponentType<{
  size?: number | string;
  color?: string;
  className?: string;
}>;

