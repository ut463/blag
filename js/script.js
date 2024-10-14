const headerTags = document.querySelectorAll('header');
const divTags = document.querySelectorAll('div');
const bodyTags = document.querySelectorAll('body');
const formTag = document.querySelectorAll('form');
const buttonTags = document.getElementById('button');
const name = document.getElementById('name');
const title = document.getElementById('title');
const description = document.getElementById('description');

buttonTags.addEventListener('click', function (event) {
    event.preventDefault();

let blogs = []

const data = JSON.parse(localStorage.getItem('blogs'));

if (data) {
    blogs = data;
}

let blog = {
    name: name.value,
    title: title.value,
    description: description.value.trim(),
};


    blogs.push(blog);

    localStorage.setItem('blogs', JSON.stringify(blogs));
    location.assign('blog.html')
    
    
});