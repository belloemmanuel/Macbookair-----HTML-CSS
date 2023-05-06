
/*---inputs js-----*/
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const input5 = document.getElementById('input5')
const message = document.getElementById('message')


function getInputs(){
//   console.log(input1.value, input2.value, input3.value, input4.value, input5.value)
  if(Number(input1.value) !== 1 || Number(input2.value) !== 2 || Number(input3.value)!== 3 || Number(input4.value)!== 4 || Number(input5.value)!== 5){
    message.innerHTML = 'Verification Failed!'
    message.style.color = 'red'
    console.log('error') 
  } else{
    message.innerHTML = 'Verification Successful!'
    message.style.color = 'green'
    console.log('success') 
  }
}


verifybtn.addEventListener('click', getInputs)
