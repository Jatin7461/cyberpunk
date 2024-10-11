import React, { RefObject } from 'react';
import './App.css';
import gsap from 'gsap';
import Observer from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
function App() {

  const container: RefObject<HTMLInputElement> = React.createRef()

  function hoverCard(classname: string, bgcolor: string) {
    gsap.registerPlugin(Observer)
    Observer.create(
      {
        target: '.card' + classname,
        onHover: () => {
          console.log('hovering')
          gsap.to('.character' + classname, {
            y: -80,
            opacity: 1,
            // duration: 5
            // backgroundColor: 'white'
          })
          gsap.to('.card' + classname, {
            backgroundColor: bgcolor
          })
          gsap.to('.number' + classname, {
            color: 'black'
          })
        },
        onHoverEnd: () => {
          gsap.to('.character' + classname, {
            y: 0,
            opacity: 0
          })

          gsap.to('.card' + classname, {
            backgroundColor: 'black'
          })
          gsap.to('.number' + classname, {
            color: 'white'
          })
        }
      }
    )

  }

  useGSAP(() => {
    setTimeout(() => {
      hoverCard('1', 'green')
      hoverCard('2', 'yellow')
      hoverCard('3', 'blue')
      hoverCard('4', 'red')

    }, 1000);
  }, { scope: container })



  return (
    <div ref={container} className='flex w-full h-full justify-between overflow-hidden items-center bg-black'>
      <div className='flex-1 flex flex-col justify-between border-r-2 h-full card1'>
        {/* <p className='self-start'>01</p> */}
        <p className='number number1 font-semibold'>01</p>
        <img src="green-guy-1.png" style={{ opacity: 0 }} className='w-3/4 h-3/4 self-end character1' alt="" />
      </div>
      <div className='flex-1 flex flex-col justify-between border-r-2 card2 h-full'>
        <p className='number number2 font-semibold'>02</p>
        <img src="yellow-guy-1.png" style={{ opacity: 0 }} className='w-3/4 h-3/4 self-end character2' alt="" />
      </div>
      <div className='flex-1 flex flex-col justify-between border-r-2 card3 h-full'>
        <p className='number font-semibold number3'>03</p>
        <img src="blue-guy-1.png" style={{ opacity: 0 }} className='w-auto h-3/4 self-end character3' alt="" />
      </div>
      <div className='flex-1 flex flex-col justify-between border-r-2 card4 h-full'>
        <p className='number font-semibold number4'>04</p>
        <img src="red-girl-1.png" style={{ opacity: 0 }} className='w-3/4 h-3/4 self-end character4' alt="" />
      </div>
    </div>
  );
}

export default App;
