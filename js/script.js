function validateMail(mail) {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)) {
        return true;
    } else {
        return false;
    }
}
const data = document.getElementsByTagName('form')[0];
data.addEventListener('submit', (e) => {
    const name = document.getElementsByTagName('input')[0].value;
    const email = document.getElementsByTagName('input')[1].value;
    const subject = document.getElementsByTagName('input')[2].value;
    const text = document.getElementsByTagName('textarea')[0].value;

    if (validateMail(email) == false) {
        alert('Invalid email');
        document.getElementsByTagName('input')[1].style.outline = '1px solid red';
        e.preventDefault();
    }
    if (subject.length > 60) {
        alert('Character limit reached');
        document.getElementsByTagName('input')[2].style.outline = '1px solid red';
        e.preventDefault();
    }
});
document.getElementsByTagName('input')[1].addEventListener('click', () => {
    document.getElementsByTagName('input')[1].style.outline = 'none';
})
document.getElementsByTagName('input')[2].addEventListener('click', () => {
    document.getElementsByTagName('input')[2].style.outline = 'none';
});

//menu mobile
let clicked = false;
let mobile = document.getElementById('menu');
mobile.addEventListener('click', () => {
    if (clicked == false) {
        mobile.style = 'color: #2eb398; top: -150%';

        document.getElementsByTagName('ul')[0].style.display = 'block';
        document.body.style.overflow = 'hidden';
        clicked = true;
    } else if (clicked == true) {
        mobile.style = 'color: #fff; top: 0';
        document.getElementsByTagName('ul')[0].style.display = 'none';
        document.body.style.overflow = 'auto';
        clicked = false;
    }
})
