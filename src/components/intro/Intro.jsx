import "./intro.css"
import Me from "../../img/abc.png"

const Intro =() =>{
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hi there... My name is </h2>
                    <h1 className="i-name">Atharv Kadam</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Computer Science Student</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Logical Thinker</div>
                            <div className="i-title-item">Problem Solver</div>
                            <div className="i-title-item">Keen Learner</div>
                            <div className="i-title-item">Sports Person</div>
                            <div className="i-title-item">And much more...</div>
                        </div>
                    </div>
                    <div className="i-description">
                        I am a pationate person. Keen on learning new things.
                        Love to help the people around me and always try to keep 
                        my Friends and Family Smiling.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"><img src={Me} alt="" className="i-img" /></div>
            </div>
        </div>
    )
};

export default Intro 