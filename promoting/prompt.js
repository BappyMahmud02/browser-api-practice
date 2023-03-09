// alert('How are you')
const showAlert = () => {
alert('taka dhar de') ;
}
const landMoney = () => {
  const result =  confirm('will you land me 5000 taka ?') ;
  console.log(result);
  if(result === true){
    alert('tui amar jan er jan') ;
  }
  else{
    console.log("dure giya mor");
  }
}

const getInfo = () => {
  const name = prompt('Tell me your name ') ;
  console.log(name);
  if(name === null) {
    alert('nam dao ')
  }
  else{
    console.log('welcome')
  }
}