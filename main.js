
input = document.getElementById('enter')
img = document.getElementById('qrimg')


function qrcode() {
    img.src = "https://source.unsplash.com/random/?" + input.value;
    
}