let ul = document.querySelector('ul');
let li = document.createElement('li');
let button = document.querySelector('button');

function addAbout() {
    if (li.innerHTML.includes("about")) {
        li.innerHTML = "";
        ul.removeChild(li);
    } else {
        li.innerHTML = 'about';
        ul.appendChild(li);

    }
}


