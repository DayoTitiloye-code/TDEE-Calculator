import { useState, useEffect } from 'react'

const useForm = (callback, validation) => {
  const [values, setValues] = useState({
    age: '',
    weight: '',
    height: '',
    gender: '',
  })

  const activity = [
    {
      value: 1,
      label: 'Sedentary/ lightly active',
    },
    {
      value: 2,
      label: 'Active/ morderately active',
    },
    {
      value: 3,
      label: 'Vigorous/ vigorously active',
    },
  ]
  const [active, setActive] = useState(activity)

  const activityHandler = (event) => {
    setActive(event.label)
  }

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(values)
    console.log(active)
    setErrors(validation(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  return {
    handleChange,
    handleSubmit,
    values,
    activityHandler,
    activity,
    errors,
  }
}

export default useForm
