export const storageService = {
    getFromStorage,
    saveToStorage
}

function getFromStorage(storageKey: string) {
    return JSON.parse(localStorage.getItem(storageKey) || 'null')
}

function saveToStorage(storageKey: string, dataToSave: any) {
    localStorage.setItem(storageKey, JSON.stringify(dataToSave))
}