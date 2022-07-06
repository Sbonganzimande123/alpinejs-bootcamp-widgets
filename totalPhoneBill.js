function totalPhoneBill(action){
    var actionList = action.split(',')
    const callFee = 2.75;
    const smsFee = 0.65
    var callCount = 0;
    var smsCount = 0;
    var total = 'R'
    for(let i = 0; i < actionList.length; i++)
      if(actionList[i].includes('call')){
        callCount++;}else {
          smsCount++}
    return total += (callCount*callFee + smsCount*smsFee).toFixed(2);
  }
