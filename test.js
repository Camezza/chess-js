let x_value = 10, y_value = 10;
let x2_value = 15, y2_value = 15;

let x_offset = x2_value - x_value
let y_offset = y2_value - y_value;

// Diagonal
if (Math.abs(x_offset) === Math.abs(y_offset)) {
    let x = 0;
    let y = 0;


    throw ("Diagonal number");
}

// Longitudinal
else if (x_offset === 0 || y_offset === 0) {
    // X loop
    for (let x = 0; x_offset > 0 ? (x < x_offset + 1) : (x >= x_offset); x_offset > 0 ? x++ : x--) {

        // Y loop
        for (let y = 0; y_offset > 0 ? (y < y_offset + 1) : (y >= y_offset); y_offset > 0 ? y++ : y--) {
            console.log([x, y]); 
            // Prevent using 0, 0
        }
    }

    throw ("Longitudinal number");
}

else throw ("Number not even");

