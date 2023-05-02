// const createuserform = document.querySelector('#createuserform');

// createuserform.addEventListener('submit', async e => {
//     e.preventDefault();
//     console.log('creating user..');
//     try{
//         const response = await fetch(
//             '/createuser',
//             {
//                 method: 'POST',
//                 body: JSON.stringify(
//                     {
//                         username: createuserform['username'].value,
//                         password: createuserform['password'].value
//                     }),
//                 headers: {'Content-Type': 'application/json'}
//             });
//         if(response) {
//             result = await response.json();
//             console.log(result);
//         }
//     }catch(err){
//         console.log(err);
//     }
// })