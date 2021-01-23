const BADGE_STATUS = {
  reprovado: 'danger',
  aprovado: 'success',
  emValidação: 'warning',
}

const getCashbackStatus = (value) => {
  if (value <= 50) {
    return BADGE_STATUS.reprovado;
  } else if (value > 50 && value <= 500) {
    return BADGE_STATUS.aprovado;
  }
  return BADGE_STATUS.emValidação;
}

const getCashbackPercentage = (value) => {
  if (value <= 50) {
    return 0;
  }
  else if (value > 50 && value <= 200) {
    return 5;
  }
  else if (value > 200 && value <= 500) {
    return 10;
  }

  return 15;
}

const getCashbackValue = (value, percentage) => (value * percentage) / 100

const createPurchase = (purchases) => {
  let list = []

  purchases.map((purchase) => {
    const item = {
      code: purchase.code,
      date: purchase.date,
      value: purchase.value,
      percentage: getCashbackPercentage(parseFloat(purchase.value)),
      cashback: getCashbackValue(parseFloat(purchase.value), getCashbackPercentage(
        parseFloat(purchase.value), 
      )),
      status: getCashbackStatus(parseFloat(purchase.value))
    }
    
    list.push(item)
  })

  return list
}

const totalCashback = (purchases) => {
  const reducer = ((acc, current) => acc + current)

  let balance = [0]
  
  purchases.map((purchase) => {
    if (purchase.status === 'success') {
      balance.push(purchase.cashback)
    }
  })

  return balance.reduce(reducer).toFixed(2)
}

export {
  getCashbackStatus,
  getCashbackPercentage,
  getCashbackValue,
  totalCashback,
  createPurchase,
}
