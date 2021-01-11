function doSyncWork () {
    return !!Math.round(Math.random());
}

let A = new Promise((resolve, reject) => {
    let work = doSyncWork();
    if (work) resolve(work);
    else reject('invalid work');
})

console.log(A);

