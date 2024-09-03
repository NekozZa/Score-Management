import React from 'react';
import '../styles/subject.css'

function Subject() {
    return (
        <div className="subject">
          <input type="text" className="name" placeholder='Subject Name'/>
          <input type="number" className='credit' placeholder='Credit'/>
          <input type="number" className="score" placeholder='Score'/>
        </div>
    )
}

export default Subject;