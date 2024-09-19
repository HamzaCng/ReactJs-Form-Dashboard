export default function validateTCKN(tckn) {
    if (tckn.length !== 11 || isNaN(tckn)) return false;

    const digits = tckn.split('').map(Number);
    const totalX = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    const totalY = digits[1] + digits[3] + digits[5] + digits[7];

    const checksum1 = (totalX * 7 - totalY) % 10;
    const checksum2 = (totalX + totalY + digits[9]) % 10;

    return digits[9] === checksum1 && digits[10] === checksum2;
}