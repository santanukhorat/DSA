/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const n = s.length;
    const openParenthesesIndices = [];
    const pair = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            openParenthesesIndices.push(i);
        }
        if (s[i] === ')') {
            const j = openParenthesesIndices.pop();
            pair[i] = j;
            pair[j] = i;
        }
    }

    let result = [];
    let currIndex = 0;
    let direction = 1;

    while (currIndex < n) {
        if (s[currIndex] === '(' || s[currIndex] === ')') {
            currIndex = pair[currIndex];
            direction = -direction;
        } else {
            result.push(s[currIndex]);
        }
        currIndex += direction;
    }

    return result.join('');
};