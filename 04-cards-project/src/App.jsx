import React from 'react'
import Card from './components/card'

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://freepnglogo.com/images/all_img/google-logo-2025-6ffb.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/024/273/862/large_2x/meta-logo-transparent-free-png.png",
      companyName: "Meta",
      datePosted: "2 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP._gmdrZwZCMJSC-nHx1L37gHaHa?pid=Api&P=0&h=180",
      companyName: "Apple",
      datePosted: "7 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "California, USA"
    },
    {
      brandLogo: "https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003",
      companyName: "Netflix",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Los Angeles, USA"
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.7IgX6OczyQrC3djWBE8xnwHaHa?pid=Api&P=0&h=180",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png",
      companyName: "Tesla",
      datePosted: "1 day ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo-PNG-Picture.png",
      companyName: "Adobe",
      datePosted: "4 days ago",
      post: "UI/UX Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$42/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.ZmuGKYu4jtLjIAtbvQnhYQHaHa?pid=Api&P=0&h=180",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://www.seekpng.com/png/full/957-9571167_airbnb-png.png",
      companyName: "Airbnb",
      datePosted: "9 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Remote"
    }
  ];


  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card
            logo={elem.brandLogo}
            company={elem.companyName}
            date={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        </div>
      })}
    </div>
  )
}

export default App
