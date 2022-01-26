export function shorten(str: string) {
    if (str.length < 10) return str;
    return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
  }

export function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}