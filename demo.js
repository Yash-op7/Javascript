const resolveBtn = document.getElementById('resolve-btn');
const rejectBtn = document.getElementById('reject-btn');

const p = new Promise((res, rej) => {
    resolveBtn.addEventListener('click', () => res('promise resolved'));
    rejectBtn.addEventListener('click', () => res('promise rejected'));
});


p().then((msg) => console.log(msg)).catch((msg) => console.log(msg));
