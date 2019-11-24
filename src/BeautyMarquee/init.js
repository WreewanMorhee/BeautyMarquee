import React from 'react'
import ReactDOM from 'react-dom'
import parse from 'html-react-parser'
import BeautyMarquee from './BeautyMarquee'

export const init = ({ class_name, ...props }) => {
  const target_html = document.querySelector(class_name).innerHTML

  ReactDOM.render(
    <BeautyMarquee {...props}>{parse(target_html)}</BeautyMarquee>,
    document.querySelector(class_name)
  )
}
