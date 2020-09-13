let obj = {};

function insertobj(row) {
  const [lang, end, rank, food, score] = row.split(' ');
  if (!obj[score]){
    obj[score] = {};
    obj[score]['count'] = 0;
  }
  obj[score]['count']++;

  if (!obj[score][lang]) {
    obj[score][lang] = {};
    obj[score][lang]['count'] = 0;
  }
  obj[score][lang]['count']++;
  if (!obj[score][lang][end]) {
    obj[score][lang][end] = {};
    obj[score][lang][end]['count'] = 0;
  }
  obj[score][lang][end]['count']++;
  if (!obj[score][lang][end][rank]) {
    obj[score][lang][end][rank] = {};
    obj[score][lang][end][rank]['count'] = 0;
  }
  obj[score][lang][end][rank]['count']++;
  if (!obj[score][lang][end][rank][food]) {
    obj[score][lang][end][rank][food] = {};
    obj[score][lang][end][rank][food]['count'] = 0;
  }
  obj[score][lang][end][rank][food]['count']++;
  if (!obj[score][lang][end][rank][food]) {
    obj[score][lang][end][rank][food] = {};
    obj[score][lang][end][rank][food]['count'] = 0;
  }
  obj[score][lang][end][rank][food]['count']++;
}

function solution(info, query) {
  let answer = [];

  for (let i = 0; i < info.length; i++) {
    insertobj(info[i]);
  }
  for (let i = 0; i < query.length; i++) {
    const [lang, end, rank, foodAndscore] = query[i].split(' and ')
    const [food, score] = foodAndscore.split(' ')
    let count = 0;

    let afterScore = [];
    for (const key of Object.keys(obj)) {
      if (Number(key) >= score) {
        afterScore.push(obj[key]);
      }
    }
    let afterLang = [];
    for (let i = 0; i < afterScore.length; i++) {
      if (lang == '-') {
        for (const key of Object.keys(afterScore[i])){
          afterLang.push(afterScore[i][key])
        }
      } else {
        if (afterScore[i][lang]) {
          afterLang.push(afterScore[i][lang]);
        }
      }
    }
    let afterEnd = [];
    for (let i = 0; i < afterLang.length; i++) {
      if (end == '-') {
        for (const key of Object.keys(afterLang[i])){
          afterEnd.push(afterLang[i][key])
        }
      } else {
        if (afterLang[i][end]) {
          afterEnd.push(afterLang[i][end]);
        }
      }
    }
    let afterRank = [];
    for (let i = 0; i < afterEnd.length; i++) {
      if (rank == '-') {
        for (const key of Object.keys(afterEnd[i])){
          afterRank.push(afterEnd[i][key])
        }
      } else {
        if (afterEnd[i][rank]) {
          afterRank.push(afterEnd[i][rank]);
        }
      }
    }
    let afterFood = [];
    for (let i = 0; i < afterRank.length; i++) {
      if (food == '-') {
        for (const key of Object.keys(afterRank[i])){
          afterFood.push(afterRank[i][key])
        }
      } else {
        if (afterRank[i][food]) {
          afterFood.push(afterRank[i][food]);
        }
      }
    }
    afterFood.forEach(v => {
      if (typeof(v) == 'number') {
        count += v;
      }
    })
    answer.push(count);
  }
  console.log(answer);
}
let a = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
let b = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];
solution(a, b);