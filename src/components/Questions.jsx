import React, { useState } from "react";
import style from "../css/Style.module.css";

const Questions = () => {
  const [state1, setstate1] = useState(" ");
  const [state2, setstate2] = useState(" ");
  const [state3, setstate3] = useState(" ");
  const [state4, setstate4] = useState(" ");

  let answer1 = () => {
    setstate1(
      <div className={style.answer}>
        <p>
          Playlists are a great way to save collections of music, either for
          your own listening or to share.
        </p>
        <p>To create one:</p>
        <ol>
          <li className={style.demo}>Tap Your Library</li>
          <li>
            Tap <strong>create</strong>
          </li>
          <li>Give your playlist a name</li>
          <li> Start adding songs ( and we'll help you along)</li>
        </ol>
      </div>
    );
  };

  let answer2 = () => {
    setstate2(
      <div className={style.answer}>
        <ol>
          <li className={style.demo}>Tap Home</li>
          <li>
            Tap <strong>Settings</strong>
          </li>
          <li>
            Tap <strong>Data Saver</strong>
          </li>
          <li> Switch on Data Saver</li>
        </ol>
      </div>
    );
  };

  let answer3 = () => {
    setstate3(
      <div className={style.answer}>
        <p>Any playlist with the shuffle icon will play on shuffle</p>
        <p>
          Some playlists won't have the shuffle icon, so you can tap any song to
          play it
        </p>
      </div>
    );
  };

  let answer4 = () => {
    setstate4(
      <div className={style.answer}>
        <p>
          Tap <strong>Search</strong>
          Under <strong>Browse All,</strong> tap Podcasts
        </p>
      </div>
    );
  };

  
  return (
    <div>
      {/* step 6 */}

      <div id={style.gotQuestion}>
        <h1> Got questions?</h1>

        {/* div1  */}
        <div className={style.question} onClick={answer1}>
          <div className={style.questiontext}>
            <h3 className={style.me}>
              <span>{"> "}</span>How do I create a playlist?{" "}
            </h3>
          </div>
          {state1}
        </div>

        {/* div2 */}
        <div className={style.question} onClick={answer2}>
          <div className={style.questiontext}>
            <h3 className={style.me}>
              {" "}
              <span>{"> "}</span> How do I activate Data Saver mode?{" "}
            </h3>
          </div>
          {state2}
        </div>

        {/* div3  */}
        <div className={style.question} onClick={answer3}>
          <div className={style.questiontext}>
            <h3 className={style.me}>
              <span>{"> "}</span>Is it only possible to shuffle play music?
            </h3>
          </div>
          {state3}
        </div>

        {/* div4  */}
        <div className={style.question} onClick={answer4}>
          <div className={style.questiontext}>
            <h3 className={style.me}>
              <span>{"> "}</span>Where can I find Podcasts?
            </h3>
          </div>
          {state4}
        </div>
      </div>
    </div>
  );
};

export default Questions;
