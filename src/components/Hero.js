import {Nav} from './nav/Nav'

export const Hero = () => {
    return(
        <header className="hero">
            <div className="container">
                <Nav/>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <a href="" class="button">Awesome!</a>
            </div>
        </header>
    )
}