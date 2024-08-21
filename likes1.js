let likesBtn=document.getElementById('likes-btn');
let dislikesBtn=document.getElementById('dislikes-btn');
let displayLikes=document.getElementById('likes-display');
let displayDisLikes=document.getElementById('dislikes-display');
let totalDisplay=document.getElementById('total');

let likes=localStorage.getItem('likes')?localStorage.getItem('likes'):0;
let dislikes=localStorage.getItem('dislikes')?localStorage.getItem('dislikes'):0;
let total=0;

displayLikes.textContent=likes;
displayDisLikes.textContent=dislikes;
totalDisplay.textContent=total;

likesBtn.addEventListener('click',function()
{
    likes++;
    displayLikes.textContent=localStorage.getItem('likes');
    total++;
    totalDisplay.textContent=total;
})
dislikesBtn.addEventListener('click',function()
{
    dislikes++;
    displayDisLikes.textContent=localStorage.getItem('dislikes');
    total++;
    totalDisplay.textContent=total;
})