import React from 'react'
import teamColorArray from './teamColorArray'

const setBackgroundColor = (team) => {
    /* console.log(team, teamColorArray) */
    let color = teamColorArray.filter(entry => entry.team === team.nickname)
   /*  console.log(color[0].color, color[0].lightcolor) */
    return color[0]
}

export default setBackgroundColor