 let raceNumber = Math.floor(Math.random()*1000);

 const registeredEarly = true;

 const age=20;
 if( age>18 && registeredEarly){
    raceNumber += 1000;
 }
 if(age>18 && registeredEarly){
    console.log(' you will race at 9:30 am.'+raceNumber);
 }else if(age>18 && !registeredEarly){
    console.log('you will race at 11:00 am.'+raceNumber);
 }else{
    console.log('you will race at 12:30 pm' +raceNumber);
 }

if(age === 18 && registeredEarly){
    console.log('should see the registration desk');
}