const input1 =  [

'Downloads',
'Videos',
'capture',
'mp4'

];
const yourFunction = (list)  => {
    const lastElement = list.length -1;
    const extension = list[lastElement];
    const newList = [...list]
    newList.pop();
    return `${newList.join('/')}.${extension}`;
}
console.log(yourFunction(input1));

const input2 =  [

    'CodinGame',
    'python',
    'py'
    ];

console.log(yourFunction(input2));
 const input3 = [

    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py'
        ];   
console.log(yourFunction(input3));         


