import sha256 from 'crypto-js/sha256';

export function HashSHA256(number: number) {
    const hash = sha256(number.toString())
    return hash;
}

export function RandomHashSHA256() {
    return HashSHA256(Math.floor(Math.random() * 1e9))
}