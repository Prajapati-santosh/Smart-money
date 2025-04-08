import React from "react";
import './ScrollableText.css';
import { useEffect } from "react";

function ScrollableText(){
  useEffect(() => {
    const spans = document.querySelectorAll('.word');

    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.add('highlight');
          }
          else{
            entry.target.classList.remove('highlight')
          }
        });
      },
      {
        rootMargin:'0px 0px -140px 0px',
        threshold: 0.1, 
      }
    );

    spans.forEach((span) => {
      observer.observe(span);
    });

    // Cleanup observer on component unmount
    return () => {
      spans.forEach((span) => {
        observer.unobserve(span);
      });
    };
  }, []);


    const words = [
        "Take ", "charge ", "of ", "your ", "finances ", "with ", "your ", "ultimate ",
        "personal ", "finance ", "management ", "tool ", "designed ", "to ", "help ",
        "you ", "take ", "control ", "of ", "your ", "financial ", "future. ",
        "Track ", "expenses, ", "set ", "budgets, ", "and ", "achieve ", "your ",
        "financial ", "goals all ", "in ", "one ", "place. ", "Simplify ", "your ",
        "finances ", "today! "
      ];
    
      // const spanStyle = { color: "rgb(51, 51, 51)" };
    
      return (
        <div className='div-span'>
          <div id="spans">
          {words.map((word, index) => (
            <span  className='word' key={index}  >
              {word}
            </span>
          ))}
          </div>
        </div>
      );
}

export default ScrollableText;