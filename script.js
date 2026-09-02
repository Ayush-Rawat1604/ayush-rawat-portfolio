const menu=document.querySelector('.menu');
const nav=document.querySelector('#nav-links');
if(menu){menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='68px';nav.style.right='22px';nav.style.background='#0d1b2e';nav.style.padding='16px 20px';nav.style.border='1px solid #203851';nav.style.borderRadius='12px';});}
