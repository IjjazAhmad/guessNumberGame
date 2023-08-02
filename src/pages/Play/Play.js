import React, { useEffect, useRef, useState } from 'react'

export default function Play() {
  const random = Math.floor(Math.random() * 100) + 1;
  const [answer, setAnswer] = useState(random);

  const [userGuessNum, setStateguessNumber] = useState("");;
  const [guessCount, setStateguessCount] = useState(0);
  const [remainingCount, setremainingCount] = useState(8);
  const [guessNums, setStateguessNum] = useState([]);

  const [disable, setStateDisable] = useState(false);

  const [trymsg, settrymsg] = useState("Total Attempts : ");
  const [msg1, setMsg1] = useState("");
  const [msg2, setMsg2] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");


let user = JSON.parse(localStorage.getItem("user"))




  const play = () => {
    // e.preventDefault();
    if (userGuessNum < 1 || userGuessNum > 100) {
      alert("Please enter number between 1-100");
    }
    else if (guessCount == 8) {
      setMsg1("Game Over!!!")
      setMsg2("Answer is : " + answer)
      setStateDisable(true)
      setColor1("text-danger fw-bold")
      setColor2("text-white bg-info  text-center ")
    }
    else {
      setStateguessNum([...guessNums, userGuessNum])
      setStateguessCount(guessCount + 1)
      setremainingCount(remainingCount - 1)
      settrymsg("Remaining Try : ")
      if (+(userGuessNum) < +(answer)) {
        setMsg1("You Guess Too Lower Number")
        setMsg2("Oops! Try again")
        setColor1("text-info fw-bold")
        setColor2("text-danger  text-center ")


      }
      else if (+(userGuessNum) > +(answer)) {
        setMsg1("You Guess Too Higher Number")
        setMsg2("Oops! Try again")
        setColor1("text-primary fw-bold")
      setColor2("text-danger  text-center ")

      }
      else if (Number(userGuessNum) === +(answer)) {
        setMsg1("Victory!")
        setMsg2("You are a Winner!!!")
        setStateDisable(true)
        setColor1("text-secondary fw-bold")
        setColor2("text-success fw-bold text-center ")

      }
      else if (Number(userGuessNum) !== +(answer)) {
        setMsg1("Plz! Enter only number")
        setMsg2("Oops! Try again")
        setColor1("text-white bg-dark fw-bold")
        setColor2("text-danger fw-bold text-center ")
      }
    }
  }

  const replay = () => {
    setStateDisable(false)
    setMsg1("")
    setMsg2("")
    settrymsg("Total Attempts : ")
    setStateguessCount(0)
    setremainingCount(8)
    setStateguessNum([])
    setAnswer(Math.floor(Math.random() * 100) + 1)
  }
  return (
    <>
      <div className="playpage pt-lg-5">
        <div className="container pt-lg-5">
          <div className="row">
              <h3>Welcome : {user.userName}</h3>
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3  my-5 ">
              <div className="card p-2 p-md-3 p-lg-4 text-center">
                <h4>I am thinking a number between <span>1-100.</span></h4>
                <h4>Can you guess it</h4>
                <input disabled={disable}  type="text" placeholder="Type" onChange={e => { setStateguessNumber(e.target.value) }} />
                <div className="button mt-3">
                  <button className='btn btn-outline-primary m-3' disabled={disable} onClick={play} id="my-btn">Guess</button>
                  {disable &&
                    <button className='btn btn-outline-secondary m-3' onClick={replay}>Restart</button>}
                </div>
                <p className={color1}>{msg1}</p>
                <p className={color2}>{msg2}</p>
                <p>{trymsg}  <span className='fw-bold'> {remainingCount}</span></p>
                <p >number of guess : <span className="fw-bold">{guessCount}</span></p>
                <p >Guess number are : {guessNums.map((item, i) => <span className='fw-bold' key={i}> {item},</span>)}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="winnerBox">

        <p >display</p>
        </div> */}
    </>
  )
}
