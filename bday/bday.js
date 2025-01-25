let msgindex=0;
document.body.addEventListener("click",(event)=>{
    const circle=document.createElement('div');
    circle.className='circle';
    circle.textContent='Hi';
    const x=event.clientX;
    const y=event.clientY;
    circle.style.top=`${y-25}px`;
    circle.style.left=`${x-25}px`;
console.log(x-25,y-25);
    const color=["red","blue,","orange","red","purple","pink","brown","green"];
    const msg=["Happy","Birthday","🙌","Anam","🥳","mtlb","Enum","Sorry","Aman ","Bhai","🥹"];
    circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)]
    circle.textContent=msg[msgindex];
    msgindex = (msgindex + 1) % msg.length;
    document.body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();

    },5000

    )
})