

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="left">
        <h1 className="join">Join the Community</h1>
        <div className="flex">
          <h5 className="rota">Get your Jumpstart Guides!</h5>
          <img src="https://learningally.org/Portals/6/Images/college-sell.jpg" alt="" />
        </div>

      </div>
      <div className="right">
        <h1>get Subscribed</h1>
        <p>Sign up for our Newsletter to stay up-to-date with everything Pick Up Limes.</p> <p>When you join, we will send the link to our plant-based jumpstart guide right to your inbox!</p>
        <input className="subfeild" type="text" />
        <button className="subbutton">Submit</button>
      </div>
    </div>
  )
}
