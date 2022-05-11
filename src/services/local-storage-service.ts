interface LocalStorageServiceInterface {
  read: (key: string) => string | null;
  write: (key: string, data: string) => void;
}

function createService(): LocalStorageServiceInterface {
  const keyPrefix = '@ys';

  const write = (key: string, data: string): void => {
    const prefixedKey = `${keyPrefix}.${key}`;

    localStorage.setItem(prefixedKey, data);
  };

  const read = (key: string): string | null => {
    const prefixedKey = `${keyPrefix}.${key}`;

    return localStorage.getItem(prefixedKey);
  }

  return {
    read,
    write,
  };
}

const LocalStorageService = createService();

export type {
  LocalStorageServiceInterface,
};

export {
  LocalStorageService,
};
