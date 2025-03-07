function calculateTotalValue(nickels, dimes, quarters, loonies, toonies) {
    const nickelValue = 0.05;
    const dimeValue = 0.10;
    const quarterValue = 0.25;
    const loonieValue = 1.00;
    const toonieValue = 2.00;

    return (nickels * nickelValue) + (dimes * dimeValue) + (quarters * quarterValue) + (loonies * loonieValue) + (toonies * toonieValue);
    
}

export { calculateTotalValue };