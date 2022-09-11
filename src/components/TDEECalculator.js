import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useForm from './useForm'
import Select from 'react-select'
import validation from './validation'

function TDEECalculator({ submitForm }) {
  const {
    handleChange,
    handleSubmit,
    values,
    activity,
    activityHandler,
    errors,
  } = useForm(submitForm, validation)
  return (
    <div className="text-center pt-3">
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Label>Select your gender</Form.Label>

        <div className="mb-3">
          <Form.Label>Male</Form.Label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          <Form.Label>Female</Form.Label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
        </div>

        <Form.Group className="mb-3">
          <Form.Label>How old are you</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter your age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>How much do you weigh (kg)</Form.Label>
          <Form.Control
            type="number"
            name="weight"
            placeholder="Enter your weight"
            value={values.weight}
            onChange={handleChange}
          />
          {errors.weight && <p style={{ color: 'red' }}>{errors.weight}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>How tall are you (cm)</Form.Label>
          <Form.Control
            type="number"
            name="height"
            placeholder="Enter your height"
            value={values.height}
            onChange={handleChange}
          />
          {errors.height && <p style={{ color: 'red' }}>{errors.height}</p>}
        </Form.Group>

        <Form.Label>How active are you</Form.Label>
        <Select options={activity} onChange={activityHandler} />
        {/* {errors.activity && <p style={{ color: 'red' }}>{errors.activity}</p>} */}
        <Form.Text className="text-muted">
          <strong>*Sedentary lifestyle </strong> one that involves very little
          or no physical exercise, wherein most of the day is spent sitting,
          lying down and expending very little energy.
          <strong>*Active lifestyle</strong> means you do physical activity
          throughout the day. Any activity that gets you up and moving is part
          of an active lifestyle. Physical activity includes exercise such as
          walking or lifting weights. It also includes playing sports.
          <strong>*Vigorous lifestyle </strong> can be performing physical
          activity done with a large amount of effort, resulting in a
          substantially higher heart rate and rapid breathing. Your exertion
          would be considered hard to extremely hard, making it difficult to
          speak in full sentences.
        </Form.Text>

        {/*sedentary - https://www.workplacetesting.com/definition/1000/sedentary-lifestyle 
            active - https://www.drugs.com/cg/benefits-of-an-active-lifestyle.html
            vigorous - https://www.verywellfit.com/what-is-vigorous-intensity-exercise-3435408
        */}
        <div className="d-grid gap-2 pt-3">
          <Button className="btn btn-block mt-2" size="lg" type="submit">
            Submit form
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default TDEECalculator
