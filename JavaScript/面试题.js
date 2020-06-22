var patternMatching = function(pattern, value) {
    var m = pattern.length, n = value.length;
    if(m===1||m===0&&n===0) return true;
    if(m===0||(n===0 && m!==1)) return false;
    var Alen = 0, Blen = 0, ABegin = 1024, BBegin = 1024;
    for(let i = 0; i < m; i++){
        if(pattern[i] === 'a'){
            if(ABegin === 1024) ABegin = i;
            Alen++;
        }
        else{
            if(BBegin === 1024) BBegin = i;
            Blen++;
        }
    }
    if(Alen === 0){
        if(n % Blen !== 0) return false;
        var BString = value.slice(0, n / Blen);
        var Sb;
        for(let i = 0; i < n / Blen; i++)
            Sb += BString;
        if(Sb === value) return true;
    }
    else if(Blen === 0){
        if(n % Alen !== 0) return false;
        var AString = value.substr(0, n / Alen);
        var Sa;
        for(let i = 0; i < n / Alen; i++)
            Sa += AString;
        if(Sa === value) return true;
    }
    else{
        for(let i = 0; i * Alen <= n; i++){
        if((n - Alen * i) % Blen === 0){
            var aa, bb;
            if(ABegin < BBegin){
                aa=value.slice(0,i);
                bb=value.slice(BBegin * i,(n- Alen * i)/Blen);
            }
            else{
                b=value.substr(0,(n - Alen * i)/Blen);
                a=value.substr(ABegin * (n - Alen * i)/Blen,i);
            }
            if(aa !== bb){
                var ss;
                for(let i = 0; i < m; i++){
                    ss += pattern[i];
                    ss ==='a' ? a : b;
                }
                if(ss === value) return true;
            } 
        }
    }
    }
    return false;
};
