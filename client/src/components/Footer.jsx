import React from 'react'
export default function Footer() {
  return (
    <div className="container">
      <hr/>
      <div className="justify-content-md-center">
      <div className="row-cols-5 justify-content-md-center">


        <a className='col col-lg-2 mx-2' href='https://github.com/arnavbahadur'>        
          <img src='https://img.icons8.com/clouds/344/github.png' width={"10%"} height={"13%"}/>
         </a>
        
        <a className='col-md-auto mx-2' href='https://www.linkedin.com/in/arnav-bahadur-5051201ba/'>
        <img src='https://img.icons8.com/nolan/344/linkedin.png' width={"10%"} height={"13%"}/>
       </a>
       
       <a className='col col-lg-2 mx-2' href='mailto:bahadurarnav2203@gmail.com'>
      <img src='https://img.icons8.com/clouds/344/gmail-new.png' width={"10%"} height={"13%"}/>
      </a>


</div>

</div>
<p className="text-center">Copyright @2023 | Designed by <a href="https://www.linkedin.com/in/arnav-bahadur-5051201ba/">Arnav Bahadur</a></p>

</div>
    )
}