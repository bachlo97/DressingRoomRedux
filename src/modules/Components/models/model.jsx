import React, { useState } from 'react'
import classes from './model.module.css'

const {contain,body,model,bikinitop,bikinibottom,feetleft,feetright} = {
  contain: "/background_998.jpg",
  body: "/bodynew.png",
  model: "/1000new.png",
  bikinitop: "/bikini_branew.png",
  bikinibottom: "/bikini_pantsnew.png",
  feetleft: "/feet_high_leftnew.png",
  feetright: "/feet_high_rightnew.png",
}


function Model() {

  return (
    <div
      className={classes.contain}
      style={{ background: `url(${contain})` }}
    >
      <div
        className={classes.body}
        style={{ background: `url(${body})` }}
      ></div>
      <div
        className={classes.model}
        style={{ background: `url(${model})` }}
      ></div>
      <div
        className={classes.bikinitop}
        style={{ background: `url(${bikinitop})` }}
      ></div>
      <div
        className={classes.bikinibottom}
        style={{ background: `url(${bikinibottom})` }}
      ></div>
      <div
        className={classes.feetleft}
        style={{ background: `url(${feetleft})` }}
      ></div>
      <div
        className={classes.feetright}
        style={{ backgroundImage: `url(${feetright})` }}
      ></div>
    </div>
  )
}

export default Model