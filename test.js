let x_value = 2, y_value = 5;
let x2_value = 18, y2_value = 27;

let x_offset = x_value + x2_value;
let y_offset = y_value + y2_value;


for (let x = 0; x_offset > 0 ? (x < Math.abs(x_offset) + 1) : (x >= x_offset); x_offset > 0 ? x++ : x--) {

    for (let y = 0; y_offset > 0 ? (y < y_offset + 1) : (y >= y_offset); y_offset > 0 ? y++ : y--) {
        console.log([x, y]);
    }
}