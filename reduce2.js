const students=[
    {name:'ksd',age:31,score:85},
    {name:'kjh',age:13,score:95},
    {name:'csh',age:35,score:76}
];

const scores = students.map(s=>s.score);
console.log(scores);

const sum=scores.reduce((a,b)=>a+b,0);
console.log(`sum: ${sum}`);

const sum2 = students.map(s=>s.score)
                    .reduce((a,b)=>a+b);
console.log(sum2);
