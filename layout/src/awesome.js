import React, { useState } from 'react';
import './styles.css';

const AwesomeComponent = () => {

    return (
        <div>
            <h1>Create a Flex Container</h1>
            <div class="flex-container">
                <div class="header">
                    <div class="fltleft">Login</div>
                    <div class="fltright">Logout</div>

                </div>


            </div>
            <div class="flex-container">
                <div class="wrapper1">
                    <nav class="nav-area">
                        <ul>
                            <li> <label>Home 1</label> </li>
                            <li> <label>Home 2</label> </li>
                            <li> <label>Home 3</label> </li>
                            <li> <label>Home 4</label> </li>
                        </ul>
                    </nav>
                </div>

                <div class="wrapper2">

                </div>
            </div>
            <div class="flex-container">
                <div class="foorter">
                    <footer>Footer</footer>

                </div>

            </div>
        </div>
    );

}

export default AwesomeComponent;
