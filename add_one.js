function addOne(digits) {
    let len = digits.length;
    let next_plus = 1;

    for (let i = len - 1; i >= 0; i--) {
        let sum = digits[i] + next_plus;
        digits[i] = sum % 10;
        next_plus = Math.floor(sum / 10);
    }
    
    if (next_plus == 1) {
        return [1, ...digits];
    }
    
    return digits;
}
