function base64Encode(str) {
    const base64 = btoa(str);
    return base64;
}
function base64Decode(encodedStr) {
    const decode = atob(encodedStr);
    return decode;
}
const inputtext = document.querySelector('#encode-str');
const outputtext = document.querySelector('#decode-str');
const encodervalue = document.querySelector('#base64encoder');
const decodervalue = document.querySelector('#base64decoder');
encodervalue.addEventListener('click', () => {
    outputtext.value = base64Encode(inputtext.value);
});
decodervalue.addEventListener('click', () => {
    outputtext.value = base64Decode(inputtext.value);
});
