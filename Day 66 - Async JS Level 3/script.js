// orderFood function
function orderFood() {
    // console.log(`Ordering 🍕 Pizza ...`);
    return new Promise((res, rej) => {
        setTimeout(() => {
            const chance = Math.random() < 0.7;
            if (chance) res();
            else rej();
        }, 2000);
    })
}

orderFood()
    .then(() => {
        // console.log(`🍕 Pizza Delivered!`);
    })
    .catch(() => {
        // console.log(`‼ Pizza Delivered!`);
    })

// User -> Post -> Comments

function getUser() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ id: 1, name: "Rahul" })
        }, 1000);;
    })
}

function getPost(userId) {
    return new Promise((res, rej) => {
        res(["Title 1", "Title 2", "Title 3"]);
    })
}

function getComments(postId) {
    return new Promise((res, rej) => {
        res(["Comment 1", "Comment 2", "Comment 3"]);
    })
}

getUser()
    .then((data) => {
        console.log(`User: ${data.name}`);
        return getPost(data.id)
    })
    .then((postId) => {
        postId.forEach(element => {
            console.log(element);
        });
        return getComments(postId)
    })
    .then((comments) => {
        comments.forEach(comment => {
            console.log(comment);
        });
    });