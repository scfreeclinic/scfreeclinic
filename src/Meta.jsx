import React from 'react';
import MetaTags from 'react-meta-tags';

class Component1 extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            {/* <title>Page 1</title> */}
            <meta name="description" content="Santa Cruz Free Clinic is dedicated to fighting healthcare disparities in the Santa Cruz community by providing access to first step healthcare. We strive to provide compassionate and accessible healthcare and resources to those who may be experiencing houselessness or other difficult conditions at this time." />
            {/* <meta property="og:title" content="MyApp" /> */}
            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
          </MetaTags>
          <div className="content"> Some Content </div>
        </div>
      )
  }
}