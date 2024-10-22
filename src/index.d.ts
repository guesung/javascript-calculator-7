declare module '@woowacourse/mission-utils' {
  declare class Console {
    static readLine(query: string, callback: (input: string) => void): void;

    static readLineAsync(query: string): Promise<string>;

    static print(message: string): void;
  }
}
