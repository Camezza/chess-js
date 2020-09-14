function movePiece(game, piece, move) {
    let current_square = getSquare(game.board, piece.location);
    let move_square = getSquare(game.board, move);

    // Taking a piece
    if (move_square.occupation !== null) {

        // White's turn, remove the black piece.
        if (game.turn) {
            game.black = removePiece(game.black, move_square.occupation);
        }

        // Black's turn, remove a white piece.
        else {
            game.white = removePiece(game.white, move_square.occupation);
        }
    }

    // It is no longer the first move
    if (!piece.moved) {
        piece.moved = true;
    }

    current_square.occupation = null; // Clear previous square
    move_square.occupation = null; // Clear move square
    piece.location = move;
}