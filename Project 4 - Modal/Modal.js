const openBtn=document.querySelector('#open-btn')
const modalContainer=document.querySelector('#modal-container')
const closeBtn=document.querySelector('#close-btn')

openBtn.addEventListener('click', ()=>{
    modalContainer.style.display='block'
})


closeBtn.addEventListener('click', ()=>{
    modalContainer.style.display='none'
})

window.addEventListener('click', function(e){
   if (e.target === modalContainer){
    modalContainer.style.display='none'
   } 
})
