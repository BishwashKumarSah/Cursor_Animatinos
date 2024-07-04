const cursorPosition = { x: 0, y: 0 };
const cursors = document.querySelectorAll(".cursor");
// let entered = false

const colors = [
    "#b22c5e", "#c5415d", "#d5585c", "#e36e5c", "#ef865e", "#f89d63", "#ffb56b"
]

const height = 24;
cursors.forEach((cursor, index) => {
    cursor.x = 0;
    cursor.y = 0;
    // cursor.style.backgroundColor = colors[index % colors.length];

})

window.addEventListener("mousemove", (e) => {
    cursorPosition.x = e.clientX;
    cursorPosition.y = e.clientY;
    animateCircle(false,null)
})

const animateCircle = (interacting,img) => {
    
    if (interacting) {        
        const content = getText(img.className);       
        let x = cursorPosition.x;
        let y = cursorPosition.y;
        cursors.forEach((cursor, index) => {            
            cursor.style.left = x - height / 2 + "px";
            cursor.style.top = y - height / 2 + "px";           
            cursor.style.scale = 5           
            cursor.textContent = content
            cursor.style.mixBlendMode = "difference"
           
        })

    } else {
        let x = cursorPosition.x;
        let y = cursorPosition.y;
        cursors.forEach((cursor, index) => {
            const nextCursor = cursors[index + 1] || cursors[0];
            cursor.style.left = x - height / 2 + "px";
            cursor.style.top = y - height / 2 + "px";
            cursor.style.scale = (10 - index) / 15
            cursor.style.mixBlendMode = "normal"
            cursor.textContent = ""
            x += (nextCursor.offsetLeft - cursor.offsetLeft) * 0.6
            y += (nextCursor.offsetTop - cursor.offsetTop) * 0.6
        })
    }


}

// document.querySelector(".first_img").addEventListener("mousemove", (e) => {
//     entered = true
//     cursorPosition.x = e.clientX;
//     cursorPosition.y = e.clientY;
//     requestAnimationFrame(animateDiv)

// })

// const animateDiv = () => {
//     let x = cursorPosition.x;
//     let y = cursorPosition.y;
//     cursors.forEach((cursor, index) => {
//         const nextCursor = cursors[index + 1] || cursors[0];
//         cursor.style.left = x + "px"
//         cursor.style.top = y + "px"
//         cursor.style.scale = 5
//         cursor.textContent = "Play"
//     })
// }

// document.querySelector(".first_img").addEventListener("mouseleave", (e) => {
//     entered = false
//     cursors.forEach((cursor, index) => {       
//         cursor.textContent = ""

//     })
// })
const getText = (className) => {
    console.log("asd",className);
    switch (className) {
        case "img imge second_img":
            return "Play"
        case "img imge first_img":
            return "Live"        
               
        default:
            return 
    }
}

window.onmousemove = e => {
    const img = e.target.closest(".imge");    
    const interacting = img !== null;
    
    // console.log(interacting);
    animateCircle(interacting,img)
    const cursorElement = document.querySelector(".cursor");    
}