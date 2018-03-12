export default error => Object.assign({}, error, {
  message: error.message,
  stack: error.stack
})
