
import './App.scss';

import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import play  from './play.png'
import download  from './download.png'
import whitsunday  from './whitsunday.png'

function App() {


  const [navbarSelection, setnavbarSelection] = useState(1);

 

  return (
    <div className="container">
      <div className='header headercolor'> 
   
        <div className='headercontainer'>
            <a href='#section1' className={`sectiontext ${navbarSelection == 1 ? `sectionselected` : null}`}><img src={play} className='playbtn'></img></a> 
            <hr></hr>
            <a href='#section2' className={`sectiontext ${navbarSelection == 2 ? `sectionselected` : null}`}>Background & Challenge</a>
            <hr></hr>
            <a href='#section3' className={`sectiontext ${navbarSelection == 3 ? `sectionselected` : null}`}>Solution</a>
            <hr></hr>
            <a>Results & Effectiveness </a>
            <hr></hr>
            <a href='#section4' className={`sectiontext ${navbarSelection == 4 ? `sectionselected` : null}`}>Slideshow</a>
            <hr></hr>
        </div>
      
        <div>
            <button className='buttondownload'><img src={download} className="download"></img>Download Board</button>
        </div>
      </div>
      <div className='dotnav'>
          <ul>
            <a href='#section1' className={`dotstyle ${navbarSelection == 1 ? `dotselected` : null}`}><li>•</li></a>
            <a href='#section2'  className={`dotstyle ${navbarSelection == 2 ? `dotselected` : null}`}><li>•</li></a>
            <a href='#section3'  className={`dotstyle ${navbarSelection == 3 ? `dotselected` : null}`}><li>•</li></a>
            <a href='#section4'  className={`dotstyle ${navbarSelection == 4 ? `dotselected` : null}`}><li>•</li></a>
          </ul>
        </div>
      <div id="section1" className='section1'>
        <div className='sec1container' onMouseEnter={()=>{setnavbarSelection(1)}}>
          <div className='text'>
            <button className='playbutton'>►</button>
          </div>
        </div>
        <div id="section2" className='sec2container'  onMouseEnter={()=>{setnavbarSelection(2)}}>
          <div className='row'>
            <img src={whitsunday} className="whitsunday"/>
          </div>
          <div className='row2'>
            <div className='sec2text'>Background <br></br> & Audience</div>
            <div className='description'>Tourism & Events Queensland wanted to increase consideration of the Whitsundays amongst 'social fun seekers'; digitally savvy consumers that socialise substantially online.</div>
            <div className='sec2text'>Problem</div>
            <div className='description'>The Whitsundays was losing its cachet as an aspirational holiday location.</div>
            <div className='sec2text'>Objective</div>
            <div className='description'>Shift perceptions and re-build the Whitsundays social currency as a world-class destination.</div>
          </div>
        </div>
        <div id="section3" className='sec3container'  onMouseEnter={()=>{setnavbarSelection(3)}}>
          <div className='solution'>Solution</div>
            <div className='rowcontainer'>
              <div className='rowsolution'>
                <p> We knew movies rated high on the list of our target’s interests and, with incredible beaches, seaplanes, yachts and glamorous locations, the Whitsundays is the perfect setting for a movie. </p>
                <p> So we invited Australians to write it: </p>
                <p className='white'> The Whitsundays. <br></br> A movie that’s waiting to be written.</p>
                <p> We enlisted world-renowned screenwriter Craig Pearce as Script Supervisor. Then for 20 days we posted a daily storyboard image on Facebook and Instagram, inviting the public to write scenes for a chance to win a $10,000 luxury holiday.</p>
              </div>
              <div className='rowsolution'>
                <p> The campaign launched with a trailer, radio and online advertising.  </p>
                <p> We reacted to the storyline as it developed, selecting and treating images according to the previous winning scene. </p>
                <p> Each scene written and shared became a compelling “ad” for the Whitsundays. </p>
                <p> Together, a Hollywood screenwriter and the Australian public had created the world’s first crowd-sourced movie storyboard and a story universe with millions of possible permutations. </p>
              </div>
            </div>
          </div>
          
          <div id="section4" className='sec4container'  onMouseEnter={()=>{setnavbarSelection(4)}}>
            <div className='tabs'>
            <Tabs>
              <div className='tablist'>
                <TabList>
                  <Tab>Video</Tab>
                  <Tab>Photography</Tab>
                  <Tab>Social</Tab>
                  <Tab>PR</Tab>
                  <Tab>Radio</Tab>
                </TabList>
              </div>
            

              <TabPanel>
                <div className='tabcontent'>
                   <div className='rowtab1'>
                      
                      <iframe width="350" height="200"
                         src="https://www.youtube.com/embed/tgbNymZ7vqY">
                      </iframe>
                    </div>
                    <div className='rowtab'>
                      <p>Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves.</p> 
                      <button className='viewproj'>View Project</button>
                    </div>
                </div>
              </TabPanel>
              <TabPanel>
               <div className='tabcontent'>
                   <div className='rowtab1'>
                      Photography
                    </div>
                    <div className='rowtab'>
                      <p>Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves.</p> 
                      <button className='viewproj'>View Project</button>
                    </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div className='tabcontent'>
                   <div className='rowtab1'>
                      Social
                    </div>
                    <div className='rowtab'>
                      <p>Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves.</p> 
                      <button className='viewproj'>View Project</button>
                    </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div className='tabcontent'>
                   <div className='rowtab1'>
                      PR
                    </div>
                    <div className='rowtab'>
                      <p>Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves.</p> 
                      <button className='viewproj'>View Project</button>
                    </div>
                </div>
              </TabPanel>
              <TabPanel>
                 <div className='tabcontent'>
                   <div className='rowtab1'>
                      RADIO
                    </div>
                    <div className='rowtab'>
                      <p>Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves.</p> 
                      <button className='viewproj'>View Project</button>
                    </div>
                </div>
              </TabPanel>
            </Tabs>
            </div>
            

          </div>
         
      </div>
    
    </div>
  );
}

export default App;
