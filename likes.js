let likesBtn=document.getElementById('likes-btn');
let dislikesBtn=document.getElementById('dislikes-btn');
let displayLikes=document.getElementById('likes-display');
let displayDisLikes=document.getElementById('dislikes-display');
let totalDisplay=document.getElementById('total');

let likes=0;
let dislikes=0;
let total=0;

displayLikes.textContent=likes;
displayDisLikes.textContent=dislikes;
totalDisplay.textContent=total;

likesBtn.addEventListener('click',function()
{
    likes++;
    displayLikes.textContent=likes;
    total++;
    totalDisplay.textContent=total
})
dislikesBtn.addEventListener('click',function()
{
    dislikes++;
    displayDisLikes.textContent=dislikes;
    total++;
    totalDisplay.textContent=total
})