let x_value = 0, y_value = 0;
let x2_value = 0, y2_value = -2;

let x_offset = x2_value - x_value
let y_offset = y2_value - y_value;

// Diagonal
if (Math.abs(x_offset) === Math.abs(y_offset)) {

    x_offset = x_offset > 0 ? x_offset - 1 : x_offset + 1;
    y_offset = y_offset > 0 ? y_offset - 1 : y_offset + 1;

    for (let x = 0, y = 0; (x_offset > 0 ? (x < x_offset) : (x > x_offset)) || (y_offset > 0 ? (y < y_offset) : (y > y_offset));) {
        let x_index_offset = x_offset > 0 ? 1 : -1;
        let y_index_offset = y_offset > 0 ? 1 : -1;

        let move = [x + x_index_offset, y + y_index_offset];
        console.log(`${y}...${y_offset}`);
        console.log(move);

        // Increment / Decrement
        x_offset > 0 ? x++ : x--;
        y_offset > 0 ? y++ : y--;
    }

    throw ("Diagonal number");
}

// Longitudinal
else if (x_offset === 0 || y_offset === 0) {

    // Y movement
    if (x_offset === 0) {
        y_offset = y_offset > 0 ? (y_offset - 1) : (y_offset + 1);
        for (let y = 0; y_offset > 0 ? (y < y_offset) : (y > y_offset); y_offset > 0 ? y++ : y--) {
            let y_index_offset = y_offset > 0 ? 1 : -1;
            let move = [0, y + y_index_offset];
            console.log(move);
        }
    }

    // X movement
    else if (y_offset === 0) {
        x_offset = x_offset > 0 ? (x_offset - 1) : (x_offset + 1);
        for (let x = 0; x_offset > 0 ? (x < x_offset) : (x > x_offset); x_offset > 0 ? x++ : x--) {
            let x_index_offset = x_offset > 0 ? 1 : -1;
            let move = [x + x_index_offset, 0];
            console.log(move);
        }
    }

    throw ("Longitudinal number");
}

else throw ("Number not even");

