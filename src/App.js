import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';
import star1 from './img/star-1.svg';
import star2 from './img/star-2.svg';
import star3 from './img/star-3.svg';
import planet1 from './img/planet-1.svg';
import planet2 from './img/planet-2.svg';
import sphere1 from './img/sphere-1.svg';
import sphere2 from './img/sphere-2.svg';

function App() {
  const planetVariants = {
    visible: {
      opacity: 1,
      y: 10,
      transition: {
        opacity:{
          duration: 2,
          ease: 'easeInOut',
          delay: 2,
        },
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 4, 
        }
      }
    },
    hidden: { opacity: 0}
  }
  return (
    <div className="App">
      <header className="App-header">
      <motion.img
          src={sphere1}
          className="sphere-1"
          alt="sphere left"
      />
      <motion.img
          src={sphere2}
          className="sphere-2"
          alt="sphere right"
      />
        <div className='hero-container'>
          <motion.img
            src={star1}
            animate={{ scale: 1.5 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className='star-1 star'
            alt='star 1'
          />
          <motion.img
            src={star2}
            animate={{ scale: 1.5 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className='star-2 star'
            alt='star 2'
          /> 
          <motion.img
            src={star3}
            animate={{ scale: 1.5 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className='star-3 star'
            alt='star 3'
          />
          <motion.img
            src={star3}
            animate={{ scale: 1.5 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className='star-4 star'
            alt='star 4'
          /> 
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            It easy to add animation
            <br/>
            to React App
          </motion.h1>
        </div>
        <motion.img 
          variants={planetVariants}
          initial='hidden'
          animate='visible'
          src={planet1}
          className="planet-1"
          alt="planet left"
        />
         <motion.img 
          variants={planetVariants}
          initial='hidden'
          animate='visible'
          src={planet2}
          className="planet-2"
          alt="planet right"
        />
      </header>
    </div>
  );
}

export default App;
