import React from 'react';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="team-content">
        <h1>Meet our Team</h1>
        <div className="member-box">
          <div className="card-a card">
            <h5>A</h5>
            <p className="name">Akshay Satpute</p>
            <p className="description">The problem-solver with a knack for coding challenges and complex algorithms.</p>
            <img src={process.env.PUBLIC_URL + '/Images/Akshay.jpg'} alt="Akshay Satpute" className="card-image" />
          </div>
          <div className="card-s card">
            <h5>S</h5>
            <p className="name">Shreyash Pohokar</p>
            <p className="description">Our management expert, passionate about overseeing every detail and ensuring everything runs efficiently.</p>
            <img src={process.env.PUBLIC_URL + '/Images/S.jpg'} alt="Shreyash Pohokar" className="card-image" />
          </div>
          <div className="card-r card">
            <h5>R</h5>
            <p className="name">Rahul Chavan</p>
            <p className="description">This coder is always eager to help others with their work, offering support and guidance whenever needed</p>
            <img src={process.env.PUBLIC_URL + '/Images/Rahul.jpeg'} alt="Rahul Chavan" className="card-image" />
          </div>
          <div className="card-c card">
            <h5>C</h5>
            <p className="name">Chinmay Ingale</p>
            <p className="description">A versatile programmer who loves exploring new tech trends and building innovative projects.</p>
            <img src={process.env.PUBLIC_URL + '/Images/Chinmay.jpg'} alt="Chinmay Ingale" className="card-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
