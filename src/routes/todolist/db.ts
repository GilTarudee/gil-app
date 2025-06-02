function generateUniqueId(length = 6): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i=0; i<length; i++){
        id +=
        chars.charAt(Math.floor(Math.random()*chars.length));
    }
    return id;
}

let todos =[
{
    id: generateUniqueId(),
    todo: 'Play Guitar',
    time: '1 Day',
    finished: true
},
{
    id: generateUniqueId(),
    todo: 'Todo 2',
    time: '3 mins',
    finished: false
}
];