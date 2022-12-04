function covertColor(str:string){
    var ctx = document.createElement('canvas').getContext('2d')!;
    ctx.fillStyle = str;
    return ctx.fillStyle;
}

export default covertColor
