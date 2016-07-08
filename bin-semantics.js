const binGrammar = require('./bin-grammar')

const eval = {
  Term: term => term.eval(),
  Boolean: bool => bool.primitiveValue === "true" ? true : false,
  Conditional: (_, condition, __, ifTrue, ___, ifFalse) => {
    cond = condition.eval()
    if (cond === true) {
      return ifTrue.eval()
    } else if (cond === false) {
      return ifFalse.eval()
    } else {
      throw new Error('Syntax error')
    }
  },
  Operator: (operator, term) => {
    const operand = term.eval()
    switch (operator.primitiveValue) {
      case 'succ': return operand + 1
      case 'pred': return operand - 1
      case 'iszero': return operand === 0
      default: throw new Error(`Unknown operator: ${operator}`)
    }
  },
  Number: term => {
    const number = term.interval.contents
    return parseInt(number, 10)
  }
}

const binSemantics = binGrammar.semantics().addOperation('eval', eval)

module.exports = binSemantics
