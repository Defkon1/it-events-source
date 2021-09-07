const SEPARATOR = ',';

export const parseTags = (tagsString: string) => {
    if(tagsString)
    {
        return tagsString.split(SEPARATOR);
    }
    
    return [];
};