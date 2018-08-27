import React from 'react'

export default class Loading extends React.Component {
  render() {
    return (
      <div className="spinner">
        <div className="cube1"/>
        <div className="cube2"/>
      </div>
    )
  }
}