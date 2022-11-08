import * as React from "react";
import "./Tabs.css"
import "bootstrap/dist/css/bootstrap.min.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

 
function App() {
 return (
   <div className="App">
     <Tabs className="Tabs">
       <TabList>
         <Tab>HISTORY</Tab>
         <Tab>APPROACH</Tab>
         <Tab>CULTURE</Tab>
         <Tab>METHOD</Tab>
       </TabList>
<TabPanel>
         <p>Tab 1 works!</p>
       </TabPanel>
       <TabPanel>
         <p>Tab 2 works!</p>
       </TabPanel>
       <TabPanel>
         <p>Tab 3 works!</p>
       </TabPanel>
       <TabPanel>
         <p>Tab 4 works!</p>
       </TabPanel>
     </Tabs>
   </div>
 );
}
 
export default App;