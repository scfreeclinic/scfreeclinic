import React from 'react'
import { Jumbotron } from "./components/Jumbotron";

export const DonorsAndSponsors = () => {
    return (
        <React.Fragment>
            <title>Donors and Sponsors - Santa Cruz Free Clinic</title>
            <Jumbotron jumboClasses="donorssponsors_jumbo" jumboText="DONORS AND SPONSORS" />
            <p>Santa Cruz Free Clinic works with and maintains a close relationship with 
                all of our sponsors and donors. The contributions they have given will allow 
                us to continue providing free and accessible healthcare to those in need. 
                Updates regarding how the donations are used will be posted on our website 
                and social media pages.</p>
            <p>Donations can be made through <a href="https://charity.gofundme.com/o/en/campaign/santa-cruz-free-clinic-fudraising">GoFundMe</a> and we will efficiently handle your 
                tax deductible contributions. The link to our GoFundMe page will be provided 
                below. If you have any questions and concerns, please feel free to contact 
                us <a href="mailto:scfreeclinic@gmail.com"> scfreeclinic@gmail.com</a>.</p>
        </React.Fragment>
    )
}
