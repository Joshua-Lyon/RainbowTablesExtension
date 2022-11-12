// let RainbowTablesRandomInt = (min, max) => {
//     let range = max-min;
//     return Math.random() * range + min;
// }

// let RainbowTablesRandomColor = () => `hsl(${RainbowTablesRandomInt(0,360)},100%,72%)`;

let RainbowTable = () => {
    let rows = document.getElementsByTagName('tr');
    let colorHue = 0;
    for (let row of rows){
        let color = `hsl(${colorHue},100%,72%)`;
        row.style.background = color;
        let children = row.children;
        for (let child of children){
            child.style.background = color;
        }
        colorHue = colorHue + 30 % 330
    }
}

 chrome.runtime.onMessage.addListener(RainbowTable)