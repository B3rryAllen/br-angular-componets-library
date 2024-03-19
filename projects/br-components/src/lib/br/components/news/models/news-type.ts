export type NewsType = 'Error' | 'Warning' | 'Waiting' | 'Success' | 'Info';

export const NewsType = {
    Error: 'Error' as NewsType,
    Warning: 'Warning' as NewsType,
    Waiting: 'Waiting' as NewsType,
    Success: 'Success' as NewsType,
    Info: 'Info' as NewsType,
};

export const newsTypeOptions: NewsType[] = [
    'Error',
    'Warning',
    'Waiting',
    'Success',
    'Info',
];
