function urlEncode(url) {
    const encode = encodeURIComponent(url);
    return encode;
}
function urlDecode(encodedUrl) {
    const decode = decodeURIComponent(encodedUrl);
    return decode;
}
const text = document.querySelector('#encode-url');
const output = document.querySelector('#decode-url');
const encoder = document.querySelector('#encoder');
const decoder = document.querySelector('#decoder');
encoder.addEventListener('click', () => {
    output.value = urlEncode(text.value);
});
decoder.addEventListener('click', () => {
    output.value = urlDecode(text.value);
});
