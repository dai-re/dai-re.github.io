import Catpoly from './../assets/image/cat-poly-com.jpeg'
import Catcam from './../assets/image/cat-poly.jpeg'
import img1 from './../assets/image/0001.webp'
import img2 from './../assets/image/0002.webp'
import img3 from './../assets/image/0003.webp'
import img4 from './../assets/image/0004.webp'

import { useEffect, useState } from 'react'
import { FaGit } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'

const Gallery = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function getGitHubRepos(username) {
      try {
        const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=17`
        const response = await fetch(apiUrl)
        const data = await response.json()
        setRepos(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    getGitHubRepos('dai-re')
  }, [])
  return (
    <div className='gallery'>
      <div className='gallery-git columns p-0 m-0'>
        <div className='left column '>
          <img src={Catpoly} alt='capcom' />
        </div>
        <div className='right column'>
          <h1>Repository terbaru saya</h1>
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
                <FaGit
                  style={{
                    fontSize: '10px'
                  }}
                />
                <a
                  className='is-size-7'
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
                <HiExternalLink
                  style={{
                    fontSize: '10px',
                    color: '#5fb5bc'
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='gallery-img columns p-0 m-0'>
        <div className='left column'>
          <div className='img-box'>
            <img src={img1} alt='gallery' />
            <img src={img2} alt='gallery' />
            <img src={img3} alt='gallery' />
            <img src={img4} alt='gallery' />
          </div>
        </div>
        <div className='right column'>
          <img src={Catcam} alt='catcam' />
        </div>
      </div>
    </div>
  )
}

export default Gallery
