function toHexByte(n) {
    return Math.trunc(n).toString(16).padStart(2, "0").toUpperCase();
}

function toHexShort(n) {
    const hex = Math.trunc(n).toString(16).padStart(4, "0").toUpperCase();
    const byte1 = hex.substring(0, 2);
    const byte2 = hex.substring(2, 4);
    const hexShort = byte2 + byte1;

    return hexShort;
}
