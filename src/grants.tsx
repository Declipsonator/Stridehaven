import './style/grants.css'
import plane from './assets/plane.svg'
import entry from './assets/entry.svg'
import receive from './assets/receive.svg'
import gear from './assets/gear.svg'
import question from './assets/question.svg'

export function RunningGrants() {
    return (
        <>
            <div className="divImage">
                <div id="topPageInfo">
                    <h3 className="fancy italic">Here are our</h3>
                    <h1>GRANTS</h1>
                    <h3 id="subtitle" className="fancy">The support you need for your running journey.</h3>
                </div>
                <img id="receiveImage" src={receive} alt=""/>
            </div>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <div id="grants">
                <a className="grant" href="/grants/travel">
                    <h2>Travel</h2>
                    <img id="planeImg" src={plane} alt="Travel"/>
                </a>
                <a className="grant" href="/grants/entry">
                    <h2>Entry Fees</h2>
                    <img src={entry} alt="Entry"/>
                </a>
                <a className="grant" href="/grants/gear">
                    <h2>Gear</h2>
                    <img src={gear} alt="Shoe"/>
                </a>
                <a className="grant" href="/grants/other">
                    <h2>Something Else</h2>
                    <img src={question} alt="Shoe"/>
                </a>
            </div>
        </>);
}

export function TravelGrant() {
    return (
        <>
            <div className="divImage">
                <div id="topPageInfo">
                    <h3 className="fancy italic">Here is our</h3>
                    <h1>Travel Grant</h1>
                    <h3 id="subtitle" className="fancy">Covers or discounts the price of gas, plane tickets and/or
                        lodging.</h3>
                </div>
                <img id="travelPagePlane" src={plane} alt=""/>
            </div>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <div style="width:100%;height:500px;" data-fillout-id="41uENjar4gus" data-fillout-embed-type="standard"
                 data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
            <script src="https://server.fillout.com/embed/v1/"></script>
        </>);
}
