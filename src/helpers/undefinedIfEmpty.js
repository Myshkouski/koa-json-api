const f = value => {
  if (
    (
      typeof value == 'object' &&
      Object.keys(value).some(value => !!f(value))
    ) ||
    value
  ) {
    return value
  }
}

export default f
