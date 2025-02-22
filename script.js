const showtoastbutton=document.querySelector('.button');
const horzintal_postion=document.querySelector('#Select');
const vertical_postion=document.querySelector('#Select-1');
const toasts_container=document.querySelector('.toasts-container');
const toast_type=document.querySelector('Select-2');
 
showtoastbutton.addEventListener('click',()=>{
    const newtoast=document.createElement('div');
    newtoast.classList.add('Toast');
    if(horzintal_postion.value==='right'){
        toasts_container.classList.add('right');
    }
    else{
        toasts_container.classList.remove('right');
    }
    if(vertical_postion.value==='bottom'){
        toasts_container.classList.add('bottom');
    }
    else{
        toasts_container.classList.remove('bottom');
    }
  console.log(vertical_postion.value);
  console.log(horzintal_postion.value);
})
