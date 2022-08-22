import { useState } from 'react'

const useForm = () => {
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
  }

  return { handleChange, handleSubmit, values, activityHandler, activity }
}

export default useForm
