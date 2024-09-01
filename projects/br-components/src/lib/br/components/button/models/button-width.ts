export const ButtonWidths = ['Auto', 'Full'] as const;

export type ButtonWidth = (typeof ButtonWidths)[number];

export const ButtonWidth = {
    Auto: 'Auto' as ButtonWidth,
    Full: 'Full' as ButtonWidth,
};
