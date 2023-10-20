import { PiMoonStarsDuotone } from 'react-icons/pi'
import { DiGithubAlt } from 'react-icons/di'
import { BsInfoCircleFill } from 'react-icons/bs'
import Content from './components/Content.jsx'
import Gallery from './components/Gallery.jsx'
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa'
import { BiSun, BiLogoInstagramAlt } from 'react-icons/bi'
import { useState } from 'react'
import saydark from './assets/image/say-dark.svg'
import say from './assets/image/say.svg'
import { motion } from 'framer-motion'

const App = () => {
  const currentYear = new Date().getFullYear()
  const [isDark, setDark] = useState(false)
  const setMode = () => {
    setDark(!isDark)
    document.getElementById('body').classList.toggle('dark')
  }

  return (
    <>
      <section>
        <nav>
          <div className='left'>
            <motion.div whileTap={{ scale: 0.6, rotate: 360 }} className='btn' onClick={setMode}>
              {isDark ? <PiMoonStarsDuotone size={30} /> : <BiSun size={30} />}
            </motion.div>
            <h1>Dai.</h1>
          </div>
          <div className='right'>
            <motion.a
              whileTap={{ scale: 0.7, y: -20 }}
              href='https://facebook.com/daire.it'
              target='_blank'
              className='link'
            >
              <FaFacebookF color='rgb(61,124,181)' />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.7, y: -20 }}
              href='https://github.com/dai-re/'
              target='_blank'
              className='link'
            >
              <DiGithubAlt color='var(--text)' />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.7, y: -20 }}
              href='https://instagram.com/dei.terada'
              target='_blank'
              className='link'
            >
              <BiLogoInstagramAlt color='rgb(181,61,96)' />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.7, y: -20 }}
              href='https://t.me/mogionc'
              target='_blank'
              className='link'
            >
              <FaTelegramPlane color='rgb(61,153,181)' />
            </motion.a>
          </div>
        </nav>
        <Content />
        <Gallery />
        <footer>
          <div className='alert is-flex is-align-items-center is-justify-content-center'>
            <BsInfoCircleFill />
            <h3 className='has-text-weight-bold is-size-7'>setatus:</h3>
            <span className='an has-text-weight-medium is-size-7'> sedang didalam pekerjaan</span>
          </div>
          <div className='info'>
            <p>
              <b>Keahlian saya </b> - Saya memiliki keahlian di berbagai bidang termasuk penggunaan
              Microsoft Excel untuk analisis data yang akurat, pengolahan dokumen dengan Microsoft
              Word, serta pengembangan antarmuka web (front-end web development) dengan penekanan
              pada desain yang menarik dan responsif. Selain itu, saya memiliki pengetahuan dasar
              dalam pengembangan aplikasi dengan Python dan keterampilan dasar dalam pengembangan
              backend. Saya juga sangat disiplin waktu, memastikan bahwa pekerjaan saya diselesaikan
              tepat waktu dan dengan kualitas yang baik.
            </p>
          </div>
          <div className='contact columns m-0'>
            <div className='left column'>
              {isDark ? <img src={saydark} alt='say' /> : <img src={say} alt='say' />}
            </div>
            <div className='right column'>
              <h1>Temukan Kreativitas Bersama Saya!</h1>
              <p>
                <b>Surel: </b>
                <a href='mailto:me@daire.eu.org'>me@daire.eu.org</a>
                <br />
                <b>Telegram: </b>
                <a href='https://t.me/mogionc'>@mogionc</a>
              </p>
              <p className='text'>
                Jangan ragu untuk mengirimkan ide-ide kreatif, pertanyaan, atau sekadar menyapa!
                Saya percaya bahwa kolaborasi membawa inspirasi baru. Ayo jadikan ide-ide Anda
                menjadi kenyataan bersama Saya.
              </p>
              <div id='copy'>Copyright &copy; 2023 - {currentYear} dai. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}
export default App
