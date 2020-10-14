import React, { Component } from 'react';

import './styles.css'

export default class Main extends Component {
    render() {
        return (
            <div className='spaced-body'>
                <div className='spaced-image'>
                    <div className='spaced-header'>
                        <h1 className='spaced-logo'> SPACED </h1>

                        <ul>
                            <li>Home</li>
                            <li>Account</li>
                            <li>Features</li>
                            <li>Developers</li>
                            <li>Pricing</li>
                            <li>Support</li>
                            <li><div className='spaced-button'>GET STARTED</div></li>
                        </ul>
                    </div>

                    <div className='spaced-content'>
                        <h3>The Night Sky</h3>
                        <h2>Beyond The Naked Eye</h2>
                        <div className='spaced-buttons'>
                            <div className='spaced-button-get-started'>GET STARTED</div>
                            <div className='spaced-button-learn-more'>LEARN MORE</div>
                        </div>
                    </div>

                    <div className='spaced-clients'>
                        <img src="/spaced/logos/cricket.png" alt="Cricket Logo" />
                        <img src="/spaced/logos/sprint.png" alt="Sprint Logo" />
                        <img src="/spaced/logos/verizon.png" alt="Verizon Logo" />
                        <img src="/spaced/logos/att.png" alt="AT&T Logo" />
                        <img src="/spaced/logos/metropcs.png" alt="MetroPCS Logo" />
                    </div>

                    <div className='spaced-glossary'>
                        <h3>The Glossary Of Telescopes</h3>
                        <h2>EXPERIENCE THE EXTRAORDINARY</h2>
                        <p>
                            Have you ever finally just gave in to the temptation and read your horoscope in the newspaper on Sunday morning? sera, we all gave. For most of us, it's curiosity.
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}
