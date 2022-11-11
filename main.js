let RandomInt = (min, max) => {
    let range = max-min;
    return Math.random() * range + min;
}

let RandomColor = () => `hsl(${RandomInt(0,360)},100%,50%)`;

