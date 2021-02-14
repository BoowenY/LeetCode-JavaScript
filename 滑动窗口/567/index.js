/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const n1 = s1.length, n2 = s2.length, m = new Map();
    let cnt = n1;
    s1.map(e => {
        if(m.has(e)) {
            let num = m.get(e);
            num += 1;
            m.set(e, num);
        } else{
            m.set(e, 1);
        }
    })
    for(let i = 0; i < n2; i++) {
        if(m.has(s2[i])) {
            for(let j = i + 1; j < i + cnt; j++) {
                if(s2.has(s2[j]))
            }

        }
    }
};