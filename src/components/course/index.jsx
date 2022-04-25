import React from 'react'
import { useParams } from 'react-router-dom'

const Course = () => {
  const {course} = useParams();

  return (
    <div>
      course - {course}
    </div>
  )
}

export default Course
