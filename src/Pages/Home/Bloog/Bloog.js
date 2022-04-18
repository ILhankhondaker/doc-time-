import React from 'react';
import './Bloog.css'
const Bloog = () => {
    return (
        <div className='ans'>
            <div>
                <h4># What is the  Difference between authorization and authentication?</h4>
                <h5>Authentication: Authentication verifies who the user is.</h5>
                <p>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
                <br />
                <h5>Authorization: Authorization determines what resources a user can access.</h5>
                <p>Authorization works through settings that are implemented and maintained by the organization.</p>
            </div>

            <div>
                <h4># Why are you using firebase? </h4>
                <p>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc.So WE can use Firebase</p>
                <h5>There have 5 Common Authentication</h5>
                <p>1.Password-based authentication. Passwords are the most common methods of authentication. <div className="br"></div>
                    2.Multi-factor authentication. <div className="br"></div>
                    3.Certificate-based authentication. <div className="br"></div>
                    4.Biometric authentication. <div className="br"></div>
                    5.Token-based authentication.</p>
            </div>

            <div>
                <h4># What other services does firebase provide other than authentication?</h4>
                <h5>There are many services of Firebase...</h5>
                <p>
                    1.Cloud Firestore. <br />
                    2.Cloud Functions.<br />
                    3.Authentication.<br />
                    4.Hosting.<br />
                    5.Cloud Storage.<br />
                    6.Google Analytics.<br />
                    7.Predictions.<br />
                    8.Cloud Messaging.</p>
            </div>

        </div>

    );
};

export default Bloog;