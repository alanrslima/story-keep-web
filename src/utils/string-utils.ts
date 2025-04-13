export class StringUtils {
  static getHash(length: number, extraChars?: string): string {
    const gen = (min: number, max: number) => {
      const randomMax = max + 1;
      return (
        randomMax &&
        [...Array(max - min)].map((s, i) => String.fromCharCode(min + i))
      );
    };

    let characters = [gen(48, 58), gen(97, 123), gen(65, 91)].flat().join("");

    if (extraChars) characters = `${characters}${extraChars}`;

    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
