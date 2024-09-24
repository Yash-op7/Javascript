const button = document.getElementById('btn');
const output = document.getElementById('output');

const callback1 = () => {
    output.innerText = 'CLICK Registerd';
}

button.addEventListener('click', callback1);
console.log('test');

setTimeout(()=>button.click(), 1000);