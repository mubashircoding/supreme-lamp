import React from 'react'
import '../components/FormStyles.css'
const Form = () => {
  return (
    <div className="from">
      <form>
        <label>Your Name</label>
        <input type="text" placeholder='Name' />
        {/* Form 1 */}
        <label>Email</label>
        <input type="Email" placeholder='example@example.com' />
        {/* Form 2 */}
        <label>Subject</label>
        <input type="text" placeholder='Subject' />
        {/* Form 3 */}
        <label>Details</label>
        <textarea rows='6' placeholder='Type a short message here' />
        {/* Form 4 */}
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form