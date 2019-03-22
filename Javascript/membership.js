const memberList = [];

const applicationForm = (age, handicap) => {
  
      
      if(age > 54 && handicap > 7) {
        memberList.push('Senior')
        return memberList
      } else {
      memberList.push('Open')
      return memberList
    }

}

console.log(applicationForm([58, 8], [30, 10]));




// function openOrSenior(data){
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
//   }
  
// openOrSenior([59, 8])

