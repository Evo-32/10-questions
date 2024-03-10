const getSleepHours = day =>{
if(day=== 'monday'){
    return 8;
}else if (day==='tuesday'){
    return 8;
}else if (day==='wednesday'){
    return 12;
}else if (day==='thursday'){
    return 9;
}else if (day==='friday'){
    return 8;
}else if (day==='saturday'){
    return 8;
}else if (day==='sunday'){
    return 7;
}
};

console.log(getSleepHours('monday'));
console.log(getSleepHours('tuesday'));
console.log(getSleepHours('wednesday'));
console.log(getSleepHours('thursday'));
console.log(getSleepHours('friday'));
console.log(getSleepHours('saturday'));
console.log(getSleepHours('sunday'));
 
const getActualSleepHours= () => getSleepHours('monday')+ getSleepHours('tuesday')
+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')
+getSleepHours('saturday')+getSleepHours('sunday');

const getIdealSleepHours = () =>{
    const getIdealSleepHours =9;
    return  idealHours * 6 ;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt= () =>{
    const actualSleepHours = getActualSleepHours();
    const getIdealSleepHours = getActualSleepHours();
    if (actualSleepHours < idealSleepHours){
        console.log('you got'+(idealSleepHours - actualSleepHours)+'hours less than you needed thisweek. get some rest.');
    }
}

if(actualSleepHours===idealsleepHours){
    console.log('the user got the enough amount of sleep');
}else if(actualSleepHours >idealsleepHours){
    console.log('the user got more sleep than needed');
}else{
    console.log('the user should get some rest');
}

calculateSleepDebtI();
