import React, {Component} from 'react';

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>A hello world React project that I created, it is a simple TodoList. You can find the source code here:</p>
            <a target="_blank" href="https://github.com/astroDev18/BlueSky" className="flex-style">
                <div className="size img-size"><img
                    src="https://github-readme-stats.vercel.app/api/pin/?username=astroDev18&repo=React-To-Do-App&show_owner=true"
                    alt="Github-Repo" className="github-image" id="git"/></div>
            </a>
        </React.Fragment>
    )
}
export default About;