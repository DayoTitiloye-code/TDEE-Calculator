const validation = (values) => {
  let errors = {}

  if (!values.age) {
    errors.age = 'Age is required'
  } else if (values.age <= 0) {
    errors.age = 'Your age cannot be less than 0'
  } else if (values.age > 99) {
    errors.age = ' You are too old'
  }

  if (!values.weight) {
    errors.weight = 'Weight is required'
  } else if (values.weight < 0) {
    errors.weight = 'Your weight cannot be less than 0'
  } else if (values.weight > 635) {
    errors.weight = 'Your weight cannot be this high'
  }

  if (!values.height) {
    errors.height = 'Height is required'
  } else if (values.height < 0) {
    errors.height = 'Your height cannot be less than 0'
  } else if (values.weight > 275) {
    errors.height = 'Your height cannot be this high'
  }

  return errors
}

export default validation
