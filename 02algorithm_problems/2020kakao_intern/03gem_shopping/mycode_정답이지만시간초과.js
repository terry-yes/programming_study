function getOnce(gems) {
    let onceArr = [];
    for (let i = 0;i < gems.length; i++){
        if (!onceArr.includes(gems[i])){
            onceArr.push(gems[i]);
        }
    }
    return onceArr;
}

function solution(gems) {
    var answer = [];
    let onceArr = getOnce(gems);
    let candidate = {};
    for (let i = 0; i < gems.length - onceArr.length + 1; i++) {
        let temp = [...onceArr];
        for (let j = i; j < gems.length; j++) {
            temp = temp.filter(v => v !== gems[j])
            if (!temp.length&& !candidate[j - i]){
                candidate[j - i] = [i + 1,j + 1]
            	break;
            }
        }
    }
    let keys = Object.keys(candidate).map(v => parseInt(v));
    return (candidate[Math.min(...keys)]);
}
