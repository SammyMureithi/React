/**
 * Render allows us to prints something to our screen,
 * the second parameter after render is where we want to print our elements
 */

import NavComponents from "./Components/NavComponents";


 function Advert() {
    return (
      <div>
        <header>
        <img src="Img\10.jpg" width="60px" height="60px"></img>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
        <div id="advert"> 
        <img src='Img\1.jpg'></img>
          <div id="text">
          <h1>Ford Brail</h1>
          <p>Our website keeps three levels of cookies. You can adjust your preferences at any time. 
              If you want more information about what cookies are and which cookies we collect
              I am new to ReactJs, and I am having lots of anycodings_javascript questions in my mind, for 
              instance I want to anycodings_javascript
               append instead of replacing with render anycodings_javascript method,</p>

          </div>

        </div>
         
      
      </div>
    )
  }

   function Component (){
    
      return (
        <div>
        <h1>Reasons why am curious to learn React</h1>
        <ul>
        <li>It fees doog</li>
          <li>Its seems simple to understand</li>
            <li>Looks almost similar to react</li>
        </ul>
        </div>
      )
    
  }

  function AnotherAdvert(){
    return(
        <div>
            <div id="advert"> 
          <div id="text">
          <h1>Ford Brail</h1>
          <p>Our website keeps three levels of cookies. You can adjust your preferences at any time. 
              If you want more information about what cookies are and which cookies we collect
              I am new to ReactJs, and I am having lots of anycodings_javascript questions in my mind, for 
              instance I want to anycodings_javascript
               append instead of replacing with render anycodings_javascript method,</p>

          </div>
          
        <img src='Img\10.jpg'></img>
          </div>

        </div>
    )

  }
  function MyFooter(){

    return(
        <div id="footer">
            <footer><span>© 2022</span> ReactWeb development. All rights reserved.</footer>
            
        </div>
    )
  }
  

  
 ReactDOM.render(<div>
     <Advert/>
     <AnotherAdvert/>
     <Component/>
     <MyFooter/>

 </div>,document.getElementById("root"));

