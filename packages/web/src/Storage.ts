export interface IStorageDriver {
  getItem(key: string): string | number | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  getAllKeys?(): Array<string>;
  clear(): void;
}

class Storage {
  private driver: IStorageDriver | undefined;

  setDriver(driver: IStorageDriver | any): void {
    this.driver = driver;
  }

  async setItem(key: string, value: string | number | object): Promise<void> {
    this.checkDriver();

    const normalizeValue =
      typeof value === 'string' ? value : JSON.stringify(value);

    this.driver!.setItem(key, normalizeValue);
  }

  async getItem(key: string): Promise<any> {
    this.checkDriver();

    const value = await this.driver!.getItem(key);

    try {
      return JSON.parse(<string>value);
    } catch (e) {
      return value;
    }
  }

  async removeItem(key: string): Promise<void> {
    this.checkDriver();

    return this.driver!.removeItem(key);
  }

  async getAllKeys(): Promise<Array<string>> {
    this.checkDriver();

    if (this.driver?.getAllKeys) {
      return this.driver!.getAllKeys();
    }

    return Object.keys(this.driver!);
  }

  async clear(): Promise<void> {
    this.checkDriver();

    this.driver!.clear();
  }

  checkDriver() {
    if (!this.driver) {
      throw Error('Storage driver was not initialized!');
    } else {
      ['setItem', 'getItem', 'removeItem', 'clear'].forEach((key) => {
        if (!(key in this.driver!)) {
          throw Error(`Storage driver must have a ${key} method`);
        }
      });
    }
  }
}

export default new Storage();
