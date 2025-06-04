// fetch
// github api


fetch('https://api.github.com/users/HanzlaCoding')
.then(res => res.json(res))
.then((data)=>{
    console.log(data);
    
})