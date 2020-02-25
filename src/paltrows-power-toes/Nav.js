import React, { Component } from 'react'
import Content from './Content'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/workouts'>
          Workouts
        </Link>
      </Content>
    )
  }
}
