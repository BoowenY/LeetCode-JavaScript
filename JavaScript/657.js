/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    if(moves.length == 0) return false;
    var x = 0, y = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == 'L') x++;
            else if (moves[i] == 'R') x--;
                else if (moves[i] == 'U') y++;
                    else y--;
    }
    if(x == 0 & y == 0) return true;
    return false;
};