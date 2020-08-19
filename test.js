let x_value = 0, y_value = 1;
let x2_value = 0, y2_value = 2;

let x_offset = x2_value - x_value
let y_offset = y2_value - y_value;

// Diagonal
if (Math.abs(x_offset) === Math.abs(y_offset)) {

    x_offset = x_offset === 0 ? 0 : (x_offset > 0 ? x_offset - 1 : x_offset + 1);
    y_offset = y_offset === 0 ? 0 : (y_offset > 0 ? y_offset - 1 : y_offset + 1);

    // X and Y loop both increase by 1/-1
    for (let x = 0, y = 0; (x_offset > 0 ? (x < x_offset) : (x > x_offset) && y_offset > 0 ? (y < y_offset) : (y > y_offset));) {

        // Prevents starting from 0, 0 
        let x_counter_offset = x_offset > 0 ? 1 : -1;
        let y_counter_offset = y_offset > 0 ? 1 : -1;

        console.log([x + x_counter_offset, y + y_counter_offset]);

        // Increment / Decrement
        x_offset > 0 ? x++ : x--;
        y_offset > 0 ? y++ : y--;
    }

    throw ("Diagonal number");
}

// Longitudinal
else if (x_offset === 0 || y_offset === 0) {
    
    // X loop
    for (let x = 0; x === 0 || (x_offset > 0 ? (x < x_offset - 1) : (x > x_offset + 1)); x_offset > 0 ? x++ : x--) {

        // Y loop
        for (let y = 0; y === 0 || (y_offset > 0 ? (y < y_offset - 1) : (y > y_offset + 1)); y_offset > 0 ? y++ : y--) {
            let x_counter_offset = x_offset === 0 ? 0 : (x_offset > 0 ? 1 : -1);
            let y_counter_offset = y_offset === 0 ? 0 : (y_offset > 0 ? 1 : -1);
            console.log([x + x_counter_offset, y + y_counter_offset]);
        }
    }

    throw ("Longitudinal number");
}

else throw ("Number not even");

