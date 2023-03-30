export const setLocalStorageItem = (key, value, expiration) => {
    const item = { value, expiration };
    localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorageItem = (key) => {
    const storedItem = localStorage.getItem(key);
    if (storedItem) {
        const { value, expiration } = JSON.parse(storedItem);
        if (new Date().getTime() <= expiration) {
            // data has not expired
            return value;
        } else {
            // data has expired
            localStorage.removeItem(key);
        }
    }
    return null;
};
