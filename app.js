(function(){
    const form = document.querySelector("#message-form")

    form.addEventListener('submit',function(event){
        event.preventDefault()

        const userInput = document.querySelector('#userInput')
        const feedbackMsg = document.querySelector('.feedbackMsg')
        const outputmsg = document.querySelector('.outputmsg')

        if(userInput.value === ''){
            feedbackMsg.classList.add('showMsg')
            setTimeout(function(){
                feedbackMsg.classList.remove('showMsg') 
            }, 4000)
           
        } else{
            outputmsg.textContent = userInput.value
            userInput.value = ''
               
        }


    } )
})()