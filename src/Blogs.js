import React from 'react'
import { Jumbotron } from "./components/Jumbotron";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./components/styles/NewsletterBlog.css";

export const Blogs = () => {
    return (
        <React.Fragment>
            <title>Blogs - Santa Cruz Free Clinic</title>
            <Jumbotron jumboClasses="newsletterblog_jumbo" jumboText="BLOGS" />
            <div className="bodywidth">
            <Tab.Container id="left-tabs-example" defaultActiveKey="StartingClinic">
                <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column sidebar">
                    <Nav.Item>
                        <Nav.Link eventKey="StartingClinic">Starting the Clinic</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="HomelessnessAndCovid">How COVID Affects Homelessness</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="_____" disabled>
                        _____
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                    <Tab.Pane eventKey="StartingClinic">
                        <h4>Starting the Clinic - A Reflection</h4>
                        <p>by: Ramtin Poustinchi</p>
                        <p>Three years ago I was hired by Housing Matters to play a role in their fight against homelessness. Their vision that "homelessness in Santa Cruz County should be rare, brief, and non-recurring" was inspiring and hopeful. It harkened me back to my early childhood, a time when innocence prevailed and the world seemed to welcome me with open arms. 6 months passed and that innocence was swept away. I came to realize that the vision I saw then was through a pinhole, and that the true reality was much more panoramic than that.</p>
                        <p>For two years I worked tirelessly to chip away at the problem bit by bit. Along the way, I got to know people who reminded me of my father, my mother, my friends. People whose lives were like reflections of my own. They had college degrees, some were in the military, others had kids, and some were kids themselves. I learned about the problems they faced, and the resilience that pushed them to keep looking for solutions, even though the resources weren't there. It hurt that I didn't have the power to help them, to help myself.</p>
                        <p>I soon realized that these problems weren't going unaddressed due to an absence of resources, but instead due to an inefficiency in resource mobilization. So I quit my job, and set off to start my own journey as a community organizer. I knew that the resources were there, I just needed to mobilize them. That was the moment the Santa Cruz Free Clinic was born.</p>
                        <p>For the first eight months, I spent my time reaching out to potential partners, professors, and non-profits, with the goal of building a bottom-up organization that could address the issues that were consistently neglected. Most of my meetings ended with a pat on the back and a kick in the pants. I didn't blame them, everyone was frustrated with the state of the city, and homelessness had become a hot button political issue. I tried to ignore these distractions and figured I might as well keep trying. Along the way, I received genuine support from mentors and students who were impassioned by my mission. These are the people who shaped what the clinic stands for today, the people who gave me the faith to keep moving forward.</p>
                        <p>After a grueling year and a half, we are finally starting to make waves. Our COVID kit project is almost in full bloom, and we plan to upscale the number and frequency of our outreach sites by the years' end. We are also in the midst of launching a bunch of new projects, all aimed at addressing gaps in care through consistent outreach and advocacy. Our staff is comprised of 24 students at UCSC, and every quarter we find our organization expanding as we onboard more and more students through our immersive internship program. Things finally feel like they're starting to change.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="HomelessnessAndCovid">
                        <h4>COVID-19’s Effect on Homelessness in the US</h4>
                        <p>by: Juliana McCullen</p>
                        <p>As we exit 2020, people worldwide still live with the constant threat of COVID-19. This devastating strain of the coronavirus has swept through the globe and is still rampant in many countries that have not responded in the prompt and aggressive way needed to control its spread. America is one of those countries. Due to the gross mishandling of the virus by our past administration, many people have lost their job, lost their home, and lost their life. This can be traced back to the lack of care by the government in handling information. Americans were given wildly different advice on how to deal with COVID, so there was a shutdown of all activities nationwide, and people had to stay home while not being given any substantial way to support themselves or concrete reason as to why. There are other countries worldwide whose citizens can live nearly normal lives: going to work, walking in the park, even going out to eat unmasked. In contrast, life in America hasn’t changed since March, and we are still feeling the effects of the virus.</p>
                        <p>According to the Bureau of Labor Statistics, the unemployment rate in America rose to be around 14.7% in April of 2020. As of November, it was back down to 6.7%, but that still means there’s over 10 million people without a source of income. With that many people out of a job and no way to pay for things like rent and other necessities, there’s going to be repercussions, one of most prevalent being an increase in homelessness. Losing one’s job due to shutdowns, delayed stimulus checks, and being unable to pay rent have all affected the number of unhoused people.</p>
                        <p>In order to help reduce the expected increase in homelessness, there have been efforts to keep people in their homes. Under the Coronavirus Aid, Relief, and Economic Security (CARES) Act, households across the US were given checks ranging $500 to $2000. More recently, folks are starting to receive the second round of stimulus checks, these only being $600. In addition to stimulus checks, starting September of 2020, there was a nationwide eviction moratorium lasting until January 31st, 2021. The eviction moratorium in California lasts for just as long, and Santa Cruz County is expected to follow state ordinances. However, evictions are only halted for tenants who meet certain criteria. According to the California Tenant Protection Guidelines, tenants cannot be evicted if they, “return a declaration of COVID-19 related financial distress, signed under penalty of perjury”, and return it to their landlord within 15 days of receiving a notice to “pay or quit”, meaning they either pay their rent or get evicted. Even with these protections, tenants are still required to pay at least 25% of the rent they owe by January 31st, 2021.</p>
                        <p>However, even the stimulus checks and the eviction moratorium were not enough to keep everyone housed. According to an LA Times article published in May of 2020, the unhoused population could grow by 45% within the year, which means that about 250,000 people would add to the 568,000 people who were already unhoused as of January 2019. Though California was predicted to have a smaller increase in homelessness compared to the rest of the country, the rate of unemployment at the beginning of widespread stay-at-home orders was unprecedented.</p>
                        <p>In spite of the situation, there hasn’t been a lot of insight into the numbers of unhoused people who have COVID due to the fact that the U.S. Department of Housing and Urban Development is not actively counting those who’ve had the virus, or even those who have died from it. According to Modern Healthcare, researchers estimated at the beginning of the pandemic that around 1,700 of the 568,000 unhoused people in America would die of the virus. In July, the Howard Center for Investigative Journalism found that the there had been an estimated 153 deaths in the unhoused populations of San Francisco, Los Angeles, New York City, Washington, D.C., Seattle, and Phoenix, which is over twenty more deaths than the current administration’s homelessness czar had predicted for the entire country’s unhoused population. Because there aren’t any solid numbers on how the unhoused population of the US has been affected by the virus, it’s that much more difficult to know the extent of its damage. According to Modern Healthcare, the two major problems in handling the virus’ effect on the unhoused population were, “a lack of readiness to work across departments dealing with both housing and health and insufficient data and testing to know who was getting sick and where.”</p>
                        <p>On top of the apparent lack of concern for keeping track of the number of infections and deaths from a global pandemic, there seemed to be a rather disordered approach to giving aid to unhoused people. According to the Howard Center, some cities, such as San Diego and Colorado Springs, constructed emergency isolation centers, emergency homeless shelters, and meal distribution centers. Other cities were not as resourceful. In Sangar, California, the city manager opposed accepting trailers that would give accommodations to  unhoused people that had been infected. In Daytona Beach, Florida, efforts to transform an unused building into permanent housing failed despite having county support and funding, and no reason was given as to why the plans fell through.</p>
                        <p>There has also been a lack of direction for the funds that cities were given to aid to their unhoused communities. According to the Howard Center, four months after the CARES act was passed, cities and counties had only spent one third of the funds they had been allocated, most of them waiting for federal direction on how to spend it. Because of this, people in need of assistance aren’t getting the kind of help they need despite the fact that there are funds to do so. Many homelessness professionals are also concerned that, when the money is used, it will be directed towards keeping people in their homes, rather than going towards helping those already unhoused. Because of this, many communities have been and continue to take it upon themselves to provide help to those in need. With homeless shelters and other resources commonly available for unhoused people being closed due to the risk from COVID, many unhoused communities heavily rely on these community-funded resource handouts.</p>
                        <p>Whether it be not traveling back home or not being able to see at-risk loved ones, COVID-19 has changed the way we live. It’s a difficult and frustrating way to live, and it’s had an especially negative effect on the unhoused populations of the US. Being one of the most at-risk and neglected populations, they are often in need of assistance from other entities besides the government. </p>
                        <p className="sources">Sources:</p>
                        <ul>
                            <li className="sources"><a href="https://www.modernhealthcare.com/safety-quality/covid-19-crisis-within-crisis-homeless-people">https://www.modernhealthcare.com/safety-quality/covid-19-crisis-within-crisis-homeless-people </a></li>
                            <li className="sources"><a href="https://www.latimes.com/homeless-housing/story/2020-05-14/coronavirus-unemployment-homeless-study-increase-45-percent">https://www.latimes.com/homeless-housing/story/2020-05-14/coronavirus-unemployment-homeless-study-increase-45-percent</a></li>
                            <li className="sources"><a href="https://landlordtenant.dre.ca.gov/tenant/protection_guidelines.html ">https://landlordtenant.dre.ca.gov/tenant/protection_guidelines.html </a></li>
                            <li className="sources"><a href="https://www.aarp.org/money/taxes/info-2020/irs-timeline-to-send-stimulus-funds/#:~:text=Recap%20of%20distribution%20of%20first,impact%20payments%20to%20eligible%20Americans">https://www.aarp.org/money/taxes/info-2020/irs-timeline-to-send-stimulus-funds/#:~:text=Recap%20of%20distribution%20of%20first,impact%20payments%20to%20eligible%20Americans</a></li>
                        </ul>
                    </Tab.Pane>
                    </Tab.Content>
                </Col>
                </Row>
            </Tab.Container> 
            </div>
        </React.Fragment>
    )
}
