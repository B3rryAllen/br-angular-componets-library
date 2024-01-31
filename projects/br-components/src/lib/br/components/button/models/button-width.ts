export const ButtonWidths = ['auto', 'full'] as const;

export type ButtonWidth = (typeof ButtonWidths)[number];

export const ButtonWidth = {
    Auto: 'auto' as ButtonWidth,
    Full: 'full' as ButtonWidth,
};
