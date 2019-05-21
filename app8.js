 document.querySelector('.get-jokes').addEventListener
 ('click', getJokes);

 function getJokes (e) {
    const number = document.querySelector('input[type="number"]').value;

     const xhr = new XMLHttpRequest();

     xhr.open('Get',`
     http://api.icndb.com/jokes/random/${number}`, true);
 

    xhr.onload = function()  {
       if(this.status === 200){
      const response = JSON.parse(this.responseText);
    //  console.log(response.value);

     let output = '';
     if(response.type == 'success'){
        response.value.forEach(function(joke){
            output += `<li>${joke.joke}</li>`;
        });
    } else {
        output += '<li>Something went wrong</li>';
    }
    document.querySelector('.jokes').innerHTML = output;
     }
    };

    xhr.send();

    e.preventDefault();
};


//CALLBACK FUNCTION

// const posts = [{title: 'Post one', body: 'This is post one'}
// ,{title: 'Post Two', body: 'This is post two'}];

// function createPost(post) {
// setTimeout(function(){
//     posts.push(post)
// }, 2000);
// }

// function getPost() {
//     setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//     output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'}
// );

// getPost();

// const posts = [{title: 'Post one', body: 'This is post one'}
// ,{title: 'Post Two', body: 'This is post two'}];

// function createPost(post, callback) {
// setTimeout(function(){
//     posts.push(post);
//     callback();
// }, 2000);
// }

// function getPost() {
//     setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//     output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'}
// , getPost);

// getPost();