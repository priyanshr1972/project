import React from 'react'
import "./Section4.css"

const Section4 = () => {
  return (<>
    <div class="master4Container" style={{backgroundColor:"white"}}>
          <div class="headerFourth"style={{backgroundColor:"white"}}>
            Everything you need for any workflow
          </div>
          <div class="subHeader"style={{backgroundColor:"white"}}>
            Easily build your ideal workflow with monday.com building blocks.
          </div>
          <div class="menuBar" style={{backgroundColor:"white"}}>
            <div id="men1" class="men menBorder">Boards</div>
            <div id="men2" class="men">Views</div>
            <div id="men3" class="men">Dashboards</div>
            <div id="men4" class="men">Integrations</div>
            <div id="men5" class="men">Automations</div>
            <div id="men6" class="men">Apps</div>
            <div id="men7" class="men">Docs</div>
          </div>
        </div>
      
    <div class="fourthBodyContainer"style={{backgroundColor:"white"}}>
      <div class="videoAnimation">
        <video class="video" preload="auto" loop=""
          poster="https://dapulse-res.cloudinary.com/video/upload/so_0p/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/7_status.jpg"
          style={{width: "100%", height: "100%"}} >
          <source
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/7_status.mp4"></source>
        </video>
      </div>
      <div class="descriptionFourth">
        <div class="hed">
          <img class="logoBoard" src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6161FF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/board_icon.svg" alt=""></img>
          <span class="headerBoard">Boards</span>
        </div>
        <div class="desc">
          Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.
        </div>
      </div>
    </div>
    </>
  )
}

export default Section4
