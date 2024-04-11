function doMagic(method) {
    const result = document.getElementById('result');
    const input = document.getElementById('input');
    let resultValue;
    switch (method) {
        case '+':
            resultValue = Number(result.innerHTML) + Number(input.value);
            break;
        case '-':
            resultValue = Number(result.innerHTML) - Number(input.value);
            break;
        case '*':
            resultValue = Number(result.innerHTML) * Number(input.value);
            break;
        case '/':
            resultValue = Number(result.innerHTML) / Number(input.value);
            break;
        case '^':
            resultValue = Math.pow(Number(result.innerHTML), Number(input.value));
            break;
        default:
            resultValue = 'Error';
            break;
    }
    result.innerHTML = resultValue;
}