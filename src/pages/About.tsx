import React from 'react'
import "./About.scss"
import aboutImage from "../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import datas from "../models/about-data.json"
import { AccordeonItem } from "../components/accordeonItem/AccordeonItem"
import { Banner } from '../components/banner/Banner'

export const About = () => {
  return (
    <main className='main-about'>
      <Banner imgPath={aboutImage} text='' />
      <section>
        <ul>
          {datas.map((data, index) => {
            return (
              <li key={index}>
                <AccordeonItem title={data.title} contentComponent={<p className='accordeon-component-wrapper'>{data.text}</p>} />
              </li>
            )
          })}</ul>
      </section>
    </main>
  )
}
