const dlg = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById("contactForm");
let LastActive = null;
openBtn.addEventListener('click', () => {
    LastActive = document.activeElement;
    dlg.showModal();
затемнение
});
closeBtn.addEventListener('click', () => dlg.close('cancel'));
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    dlg.innerHTML = `
    <div class="mock-page">
        <h1>спасибо, что поытались мне написать</h1>
        <p>я не могу сейчас вам ответить, потому что умерла от кринжа. Попытайтесь позже снова</p>
        <button onclick="this.closest('dialog').close()">Закрыть</button>
    </div>
    `;
});