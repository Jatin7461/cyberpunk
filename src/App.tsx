import React, { RefObject } from 'react';
import './App.css';
import gsap from 'gsap';
import Observer from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
import Transition from './components/Transition';
import { useNavigate } from 'react-router-dom';

const DURATION = 0.5
const GREEN = '#61ff61'
const YELLOW = '#ffff47'
const BLUE = '#645cff'
const RED = '#FF3939'
function App() {

  const navigate = useNavigate()
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
            // duration: 0.5
            // backgroundColor: 'white'
          })
          gsap.to('.card' + classname, {
            backgroundColor: bgcolor,
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
            backgroundColor: 'black',
          })
          gsap.to('.number' + classname, {
            color: 'white'
          })
        }
      }
    )

  }

  function initialAnimation(number: string, color: string) {
    gsap.fromTo('.card' + number, {
      opacity: 0,
      backgroundColor: 'black',
      y: 1000,
    }, {
      opacity: 1,
      backgroundColor: color,
      y: 0,
      duration: 1
    })

    gsap.to('.number' + number, {
      color: 'black'
    })

    gsap.fromTo('.character' + number, {
      opacity: 0,
      y: 0
    }, {
      opacity: 1,
      // y: -80,
      delay: 0.6,
      // duration: 1
    })
    gsap.to('.card' + number, {
      // opacity: 0,
      backgroundColor: 'black',
      delay: 1
    })

    gsap.to('.number' + number, {
      color: 'white',
      delay: 1
    })
    gsap.to('.character' + number, {
      opacity: 0,
      y: 0,
      delay: 1
    })
  }


  function changeRoute(color: string) {
    gsap.timeline().
      fromTo('.transition', { backgroundColor: color }, {
        width: 3000,
        height: 2500,
        duration: 1.5,
      }).to('.transition', {
        width: 0,
        height: 0
      })


    setTimeout(() => {
      navigate('/character')
    }, 1600)
  }

  useGSAP(() => {

    // gsap.timeline()
    //   .fromTo('.card1', {
    //     y: 1000,
    //     opacity: 0,
    //     backgroundColor: '#00fa00',
    //   }, {
    //     backgroundColor: '#00fa00',
    //     opacity: 1,
    //     y: 0,
    //     duration: DURATION
    //   })
    //   .from('.card2', {
    //     y: 1000,
    //     opacity: 0,
    //     backgroundColor: '#00fa00',
    //     duration: DURATION
    //   })
    //   .from('.card3', {
    //     y: 1000,
    //     opacity: 0,
    //     backgroundColor: '#00fa00',
    //     duration: DURATION
    //   })
    //   .from('.card4', {
    //     y: 1000,
    //     opacity: 0,
    //     backgroundColor: '#00fa00',
    //     duration: DURATION
    //   })



    initialAnimation('1', GREEN)
    setTimeout(() => {
      initialAnimation('2', YELLOW)
    }, 500)
    setTimeout(() => {
      initialAnimation('3', BLUE)
    }, 1000)
    setTimeout(() => {
      initialAnimation('4', RED)
    }, 1500)

    setTimeout(() => {

      hoverCard('1', GREEN)
      hoverCard('2', YELLOW)
      hoverCard('3', BLUE)
      hoverCard('4', RED)
    }, 1800);

  }, { scope: container })



  return (
    <>
      <div ref={container} className='flex w-full h-full justify-between overflow-hidden items-center bg-black'>
        <div className='flex-1 flex flex-col justify-between border-r-2 h-full card1' onClick={() => changeRoute(GREEN)}>
          {/* <p className='self-start'>01</p> */}
          <div className='names'>
            <p className='number number1 font-semibold'>01</p>
            <p className='font-bold number1'>Bloodhound</p>
            <p className='number1'>Technological Tracker</p>
          </div>
          <img src="green-guy-1.png" style={{ opacity: 0 }} className='w-3/4 h-3/4 self-end character1' alt="" />
        </div>
        <div className='flex-1 flex flex-col justify-between border-r-2 card2 h-full' onClick={() => changeRoute(YELLOW)}>
          <div className='names'>
            <p className='number number2 font-semibold'>02</p>
            <p className='font-bold number2'>Octane</p>
            <p className=' number2'>High-Speed Daredevil</p>
          </div>
          <img src="yellow-guy-1.png" style={{ opacity: 0 }} className='w-3/4 h-3/4 self-end character2' alt="" />
        </div>
        <div className='flex-1 flex flex-col justify-between border-r-2 card3 h-full' onClick={() => changeRoute(BLUE)}>
          <div className='names'>
            <p className='number number3 font-semibold'>03</p>
            <p className='font-bold number3'>Crypto</p>
            <p className=' number3'>Surveillance Expert</p>
          </div>
          <img src="blue-guy-1.png" style={{ opacity: 0 }} className='w-auto h-3/4 self-end character3' alt="" />
        </div>
        <div className='flex-1 flex flex-col justify-between border-r-2 card4 h-full' onClick={() => changeRoute(RED)}>
          <div className='names'>
            <p className='number number4 font-semibold'>04</p>
            <p className='font-bold number4'>Ash</p>
            <p className=' number4'>Incisive Instigator</p>
          </div>
          <img src="red-girl-1.png" style={{ opacity: 0 }} className='h-4/5 self-end character4' alt="" />

        </div>
        <Transition />
      </div>
    </>
  );
}

export default App;
