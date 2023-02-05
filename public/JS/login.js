const loginform = document.querySelector('#loginform');


loginform.addEventListener('submit', async e => {
    e.preventDefault();
    try{
        const result = await fetch(
            '/login',
            {
                method: 'POST',
                body: JSON.stringify(
                    {
                        username: loginform['username'].value, 
                        password: loginform['password'].value
                    }),
                headers: {'Content-Type': 'application/json'}
            });
        if(result){
            window.open(result.url, '_self');
        }
    }catch(err){
        console.log(err);
    }
});