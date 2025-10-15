// Object Destructuring 

const band ={
    bandName : "led zepplin",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherFamousSong : "kashmir"
}

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// Object Destructuring
const {bandName, famousSong, ...restProps} = band;
console.log(bandName, famousSong);
console.log(restProps);
