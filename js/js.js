const webDes = document.querySelectorAll(".web_design-text");

for(let i = 0; i<webDes.length; i++) {
    console.log(`Letter $(i) is ${webDes[i].getTotalLength()}`);
}