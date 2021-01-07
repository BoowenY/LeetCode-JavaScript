var uniquePaths = (m, n) => {
    const a = []
    for (let i = 0; i < n; i++) a.push([])
    for(let row = 0; row < n; row++) a[row][0] = 1
    for(let col = 0; col < m; col++) a[0][col] = 1
    for (let row = 1; row < n; row++){
        for (let col = 1; col < m; col++){
            a[row][col] = a[row-1][col] + a[row][col-1]
        }
    }
    return a[n-1][m-1]
};
var uniquePaths = function(m, n) {        
    const a = [ ];    
    var i = 0, j = 0;    
    for(j = 0; j < m; j++) {        
        a[j] = 1;    
    }    
    for(i = 1; i < n; i++) {        
        for(j = 1; j < m; j++) {            
            a[j] = a[j - 1] + a[j];       
        }    
    }    
    return a[m - 1];
};
