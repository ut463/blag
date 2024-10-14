const name = document.getElementById('name');
const title = document.getElementById('title');
const description = document.getElementById('description');
const lego = $('#lego');
const holderEl = document.getElementById('holder');

let blogs = []

function createBlog() {
    let blogData = JSON.parse(localStorage.getItem('blogs')) || [];

    for(let i = 0; i < blogData.length; i++) {
        const newBlog = `
        <div class="border border-2 border-black">
            <h2 class="border-bottom border-5 border-dark">${blogData[i].title}</h3>
            <p>${blogData[i].description}</p>
            <h4>Posted by: ${blogData[i].name}</h5>
        </div>
        `;

        lego.append(newBlog);
    }
}

function init() {
    createBlog();
}
init();