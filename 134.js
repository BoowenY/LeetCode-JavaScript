var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0, totalCost = 0
    for(let i = 0; i < gas.length; i++){
        totalGas += gas[i]
        totalCost += cost[i]
    }
    let currenGas = 0, start = 0
    if(totalGas < totalCost) return -1
    for(let i = 0; i < gas.length; i++){
        currenGas = currenGas - cost[i] + gas[i]
        if(currenGas < 0){
            currenGas = 0
            start = i + 1
        }
    }
    return start
};