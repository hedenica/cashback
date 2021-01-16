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

const getCashbackPercentage = (value, status) => {
  if (status === BADGE_STATUS.reprovado) {
    return 0;
  }
  else if (value >= 50 && value <= 200) {
    return 5;
  }
  else if (value > 200 && value <= 500) {
    return 10;
  }

  return 15;
}

const getCashbackValue = (value, percentage) => (value * percentage) / 100

export {
  getCashbackStatus,
  getCashbackPercentage,
  getCashbackValue,
}
