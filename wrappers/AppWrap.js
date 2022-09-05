import React from 'react'
import { NavigationDots, SocialMediaIcons } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`flex flex-row w-full ${classNames}`}>
      <SocialMediaIcons />
      <div className="flex justify-center items-center flex-1 w-full">
        <Component />
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap
