import './style/team.css'
import people from './assets/people.svg'


export function Team() {
    return (
        <>
            <div className="divImage">
                <div id="topPageInfo">
                    <h1>OUR TEAM</h1>
                    <h3 id="subtitle" className="fancy"><i><u><b>100%</b></u></i> Volunteers, High School Students and
                        Runners</h3>
                </div>
                <img id="people" src={people} alt=""/>
            </div>
            <br/>
            <br/>
            <div id="team">
                <div className="person">
                    <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Jane Doe"/>
                    <h2>Jackson Hickey</h2>
                    <p className="title">Founder & CEO & Lead Software Developer</p>
                    <p>Cross Country, Indoor & Outdoor track runner. Develops software on the side and plays oboe.</p>
                    <p>
                        <a href="https://jacksonhickey.tech" target="_blank">
                            <button>Contact</button>
                        </a>
                    </p>
                </div>
                <div className="person">
                    <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Jane Doe"/>
                    <h2>Ethan Leombrone</h2>
                    <p className="title">Co-founder & COO & Marketing Lead</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>
                        <a href="mailto:sadfsadgf@gmail.com" target="_blank">
                            <button>Contact</button>
                        </a>
                    </p>
                </div>
                <div className="person">
                    <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Jane Doe"/>
                    <h2>Daniel Oyesiku</h2>
                    <p className="title">Co-founder & CFO & CIO</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>
                        <a href="mailto:sadfsadgf@gmail.com" target="_blank">
                            <button>Contact</button>
                        </a>
                    </p>
                </div>
            </div>
            <br/>


        </>
    )
}
