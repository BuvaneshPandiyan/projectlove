import React, { useState, useEffect, useRef } from 'react';
import './Countdown.css';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState('');
  const [isCountdownEnded, setIsCountdownEnded] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const targetDate = new Date('January 01, 2025 00:00:00 am');
  
  // Use useRef to store the timer ID
  const timerRef = useRef(null);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === 'ihavefeelings') {
      setIsPasswordCorrect(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const stopCountdown = () => {
    setIsStopped(true);
    clearInterval(timerRef.current); // Stop the countdown timer
    // Send WhatsApp message when countdown is stopped
    const message = "I love you Buvi";
    const phoneNumber = "7338816479";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft('');
        setIsCountdownEnded(true);
        clearInterval(timerRef.current); // Ensure cleanup on countdown end
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      );
    };

    // Set the interval and store it in the ref
    timerRef.current = setInterval(updateCountdown, 1000);

    updateCountdown(); // Initial call to display immediately

    // Cleanup on component unmount or countdown end
    return () => clearInterval(timerRef.current);
  }, [targetDate]);

  return (
    <section id="countdown" className="countdown-section">
      <h2>The Countdown</h2>
      <p className="countdown-note">(When the countdown ends, prepare yourself for my grand farewell a mix of love, laughter, and a little drama (because, well, it’s me).)</p>

      {/* My Promise Section */}
      {!isCountdownEnded && !isStopped && (
        <div className="my-promise">
          <p>
            This countdown represents my final effort to show you how much I care. After it ends, I promise to respect your wishes and give you the space you deserve, no matter what. Until then, I will keep loving you.
          </p>
        </div>
      )}

      {/* Countdown Section */}
      {!isCountdownEnded && !isStopped ? (
        <div className="countdown">
          <p>Countdown to the last day:</p>
          <p className="time-left">{timeLeft}</p>
        </div>
      ) : isStopped ? (
        // Closure Message Section if countdown is stopped
        <div className="closure-message">
          <h2>The Start Of Something Beautiful</h2>
          <p> Lets fall in love with each other again and again and again and forever. </p>
        </div>
      ) : (
        // Closure Message Section after countdown ends
        <div className="closure-message">
          <h2>Good Bye Usha Kumari</h2>
          <p> Thank you for the memories and for being a part of my life. Thank you for the bike ride we shared, and for trusting me with your thoughts, your feelings, and your heart. Thank you for the countless hours you spent talking to me in the morning, for the texts, and for simply being there.<br /><br /> Thank you for the moments of laughter, for the times we spent together. I’ve always found joy in making fun of your looks, but it’s just my way of showing love. If it ever hurt you, I am truly sorry. I only make fun of the people I like and care about.<br /><br /> I know we shared a lot of good times, but I also want to thank you for bringing some sadness into my life. Life can’t always be happy, right? We need the bittersweet moments too, to appreciate everything else.<br /><br /> And hey, if you ever think about drinking or smoking, you can always call me. I’ll distract you and make sure you don’t go down that road. I’ll always be here for you, even if it’s just to change your mind.<br /><br /> By the way, remember that bet we made about whose baby would be more beautiful yours or mine? The amount was 10,00,000 rupees, right? Just wanted to remind you that you’ll owe me when that bet is settled, haha. I’m still confident my baby will take the crown.<br /><br /> The love I had for you was real, and I hope you know that. You deserve a happy life, and I truly wish that you find someone who will care for you in the way you deserve a good, loving husband. I may not be "boyfriend material," but I promise, I’m "husband material." Just had to throw that out there.<br /><br /> On a lighter note, those modern dresses you wear are absolutely beautiful. I can’t deny that. But when you wear traditional clothes like that stunning green one you wore last Thursday(December 19th 2024) you looked like a million bucks. I’m pretty sure I saw more than a few boys (and maybe some girls too) eyeing you. If I had to rate you, I’d give you a solid 9 out of 10. You’re just that incredible.<br /><br /> And finally, I just want to remind you: Don’t trust everyone. I’ve always been real with you, and that’s something that’s never going to change.<br /><br /> Wishing you the absolute best in life. You’re an amazing person, and I’m grateful for the time we shared. </p>
        </div>
      )}

      {/* Password input and Stop Countdown button */}
      {!isStopped && !isCountdownEnded && (
        <div className="password-section">
          {!isPasswordCorrect ? (
            <div>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter password"
              />
              <button onClick={handlePasswordSubmit}>Submit Password</button>
            </div>
          ) : (
            <div>
              <button onClick={stopCountdown}>Stop Countdown</button>
            </div>
          )}

          {/* Add the romantic and funny text under the password input */}
          <p className="password-info">
            If you have feelings for me and want to stop the countdown, just use the secret passcode. I’ll be waiting to see if you’ve got the courage to unlock it. 😉 Because once the countdown hits zero, the feelings I have for you will be long gone.
          </p>
        </div>
      )}
    </section>
  );
}

export default Countdown;
