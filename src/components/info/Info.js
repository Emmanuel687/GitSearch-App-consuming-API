//All imports
import React from 'react';

//css import 
import './css/info.css';

//Image import
import pin from './images/pin.png';
import link from './images/link.png';
import twitter from './images/twitter.png';
import build from './images/build.png';

let Info = ({userdata})=>{

    
    return(
        <>
            <section className="info">
                <article className="info-container">
                    <div className="info-profile-container">
                        <div className="info-profile-pic">
                            <img src={userdata.avatar_url} alt="pic" />
                        </div>
                        <div className="info-profile-info">
                            <div className="info-profile-info-name">
                                <h1>{userdata.name}</h1>
                                <p>@{userdata.login}</p>
                            </div>
                            <div className="info-profile-info-joined">
                                <p>Joined 30 Jul 2016</p>
                            </div>
                        </div>
                    </div>
                    <div className="info-bio">
                        <p>{userdata.bio}</p>
                    </div>
                    <div className="info-logs">
                        <div className="info-logs-repos">
                            <h3>Repos</h3>
                            <p>{userdata.public_repos}</p>
                        </div>
                        <div className="info-logs-followers">
                            <h3>Followers</h3>
                            <p>{userdata.followers}</p>
                        </div>
                        <div className="info-logs-following">
                            <h3>Following</h3>
                            <p>{userdata.following}</p>
                        </div>
                    </div>
                    <div className="info-more">
                        <div className="info-more-one">
                            <div className="info-more-one-location">
                                <img src={pin} alt="location" />
                                <p>{userdata.location?userdata.location:'Not found'}</p>
                            </div>
                            <div className="info-more-one-link">
                                <img src={link} alt="link" />
                                <p>{userdata.blog?userdata.blog:'Not found'}</p>
                            </div>
                        </div>
                        <div className="info-more-two">
                            <div className="info-more-two-twitter">
                                <img src={twitter} alt="twitter" />
                                <p>{userdata.twitter_username?userdata.twitter_username:'Not found'}</p>
                            </div>
                            <div className="info-more-two-building">
                                <img src={build} alt="building" />
                                <p>{userdata.company?userdata.company:'Not found'}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )

};


export default Info;