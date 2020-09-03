function getInfinitePieceMoves(board, piece, offset, maximum_take_threshold, applying_check) {
    // Iteration
    let movePath = [];
    let piece_counter = 0;

    // Coordinates
    let x_offset = offset[0];    let y_offset = offset[1];
    let coords = addVector(board, piece.location, [x_offset, y_offset]);
    let square = coords === null ? {} : getSquare(board, coords);

    // Misc.
    let colour = square.occupation !== undefined && square.occupation !== null ? square.occupation.colour : piece.colour;
    let takeable = isWhite(colour) === !isWhite(piece.colour);

    // Square empty, or taking a piece
    while ((square.occupation === null || takeable || applying_check) && piece_counter < maximum_take_threshold) {

        // Apply increments/decrements and add the new position
        movePath.push([x_offset, y_offset]);

        // Diagonal. (Bishops, etc.)
        if (Math.abs(x_offset) === Math.abs(y_offset)) {
            x_offset > 0 ? x_offset++ : x_offset--;
            y_offset > 0 ? y_offset++ : y_offset--;
        }

        // Longitudinal. (Rooks, etc.)
        else if (x_offset === 0 || y_offset === 0) {
            // Y movement
            if (x_offset === 0) {
                y_offset > 0 ? y_offset++ : y_offset--;
            }

            // X movement
            else if (y_offset === 0) {
                x_offset > 0 ? x_offset++ : x_offset--;
            }
        }
        else return null;

        // Piece can be taken
        if (takeable || applying_check) {
            piece_counter++;
        }

        // Update values
        coords = addVector(board, piece.location, [x_offset, y_offset]);
        square = coords === null ? {} : getSquare(board, coords);
        colour = square.occupation !== undefined && square.occupation !== null ? square.occupation.colour : piece.colour;
        takeable = isWhite(colour) === !isWhite(piece.colour);

    }
    return movePath;
}