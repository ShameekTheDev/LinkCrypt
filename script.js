// Character mapping for encoding
const charMap = {
    'A': '☀', 'B': '⚡', 'C': '☾', 'D': '⚔', 'E': '✉',
    'F': '☣', 'G': '⚙', 'H': '✂', 'I': '☿', 'J': '✈',
    'K': '⚡', 'L': '❄', 'M': '⛏', 'N': '☢', 'O': '☎',
    'P': '☠', 'Q': '⚖', 'R': '⌛', 'S': '✎', 'T': '☕',
    'U': '♻', 'V': '☂', 'W': '⚓', 'X': '❌', 'Y': '⚜',
    'Z': '☄',
    'a': '♒', 'b': '⚛', 'c': '⚡', 'd': '☭', 'e': '✪',
    'f': '✿', 'g': '⚬', 'h': '❥', 'i': '❄', 'j': '☬',
    'k': '⚕', 'l': '❂', 'm': '⚔', 'n': '☢', 'o': '⚘',
    'p': '☠', 'q': '⚖', 'r': '⚚', 's': '❦', 't': '☕',
    'u': '❧', 'v': '☍', 'w': '✵', 'x': '❎', 'y': '⚝',
    'z': '⛎',
    '0': '⚫', '1': '⚀', '2': '⚁', '3': '⚂', '4': '⚃',
    '5': '⚄', '6': '⚅', '7': '☽', '8': '❂', '9': '❁',
    '-': '⏤', '_': '‿', '/': '∕', '?': '¿', '&': '℘',
    '=': '≈', '#': '⌗', ':': '∷', '%': '‰', '@': '⚿',
    '+': '➕', ',': '٬', '*': '✶', "'": '❛'
};

// Reverse mapping for decoding
const reverseCharMap = Object.fromEntries(Object.entries(charMap).map(([key, value]) => [value, key]));

function encodeText() {
    let input = document.getElementById("encodeInput").value;
    let encoded = input.split('').map(char => charMap[char] || char).join('');
    document.getElementById("encodedOutput").innerText = encoded;
    document.getElementById("encodedContainer").classList.toggle("d-none", encoded === "");

    if (input = " ") {
        alert("Enter something to ENCODE.");
    }
}

function decodeText() {
    let input = document.getElementById("decodeInput").value;
    let decoded = input.split('').map(char => reverseCharMap[char] || char).join('');
    document.getElementById("decodedOutput").innerText = decoded;
    document.getElementById("decodedContainer").classList.toggle("d-none", decoded === "");
    
    if (input = " ") {
        alert("Enter something to DECODE.");
    }
}

function copyText(elementId) {
    let text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"));
}