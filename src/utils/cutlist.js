export const CutList = (array)=>{

    if(!(array.length%2 == 0)){
        array.push("blocked")
    }

    const middleIndex = Math.floor(array.length / 2);
    const firstPart = array.slice(0, middleIndex);
    const secondPart = array.slice(middleIndex);

    return {firstPart: firstPart, secondPart: secondPart}
}