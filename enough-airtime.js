function enoughAirtime(usage, available) {
    var usageList = usage.split(',');
    var callCount = 0;
    var smsCount = 0;
    var dataCount = 0;
    var callFee = 1.88;
    var smsFee = 0.75
    var dataFee = 12;
    var balance = 'R';
    for (let i = 0; i < usageList.length; i++) {
        if (usageList[i].includes('call')) {
            callCount++;
        } else if (usageList[i].includes('sms')) {
            smsCount++;
        } else if (usageList[i].includes('data')) {
            dataCount++;
        }
    }
    if (available < (callCount * callFee + smsCount * smsFee + dataCount * dataFee)) {
        return 'R0.00';
    }
    return balance += ((available - (callCount * callFee + smsCount * smsFee + dataCount * dataFee)).toFixed(2))
}  