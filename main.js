let RandomInt = (min, max) => {
    let range = max-min;
    return Math.random() * range + min;
}

let RandomColor = () => `hsl(${RandomInt(0,360)},100%,50%)`;

let RainbowTable = () => {
    let rows = document.getElementsByTagName('tr');
    for (let row of rows){
        row.style.background = RandomColor();
    }
}

 chrome.runtime.onMessage.addListener(RainbowTable)