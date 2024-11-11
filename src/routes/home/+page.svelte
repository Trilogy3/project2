<script>
    import './home.css';

    /**
    * @param {string} type
    */
    function handleButtonClick(type) {
        alert(`${type} emergency hotline called!`);
        // Replace alert with actual call functionality
    }
</script>

<div class="emergency-container">
    <h2>Emergency Hotline</h2>
    <div class="button-container">
        <!-- Fire Button with Icon and Label -->
        <button class="circle-button fire-button" on:click={() => handleButtonClick('Fire')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128">
                <!-- Fire icon SVG paths -->
                <radialGradient id="notoFire0" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse">
                    <stop offset=".314" stop-color="#ff9800" />
                    <stop offset=".662" stop-color="#ff6d00" />
                    <stop offset=".972" stop-color="#f44336" />
                </radialGradient>
                <path fill="url(#notoFire0)" d="..."/>
            </svg>
            <span class="button-label">Fire</span>
        </button>

        <!-- Medical Button with Icon and Label -->
        <button class="circle-button medical-button" on:click={() => handleButtonClick('Medical')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                <!-- Medical icon SVG paths -->
                <g fill="none" stroke-width="4">
                    <path fill="#2f88ff" stroke="#000" stroke-linejoin="round" d="M41 17H7C5.89543 17 5 17.8954 5 19L5.00003 39C5.00003 40.1046 5.89546 41 7.00002 41H41C42.1046 41 43 40.1046 43 39V19C43 17.8954 42.1046 17 41 17Z" />
                    <path fill="#2f88ff" stroke="#000" stroke-linejoin="round" d="M34 7H14L14 17H34V7Z" />
                    <path stroke="#fff" stroke-linecap="round" d="M19 29H29" />
                    <path stroke="#fff" stroke-linecap="round" d="M24 24V34" />
                </g>
            </svg>
            <span class="button-label">Medical</span>
        </button>

        <!-- Police Button with Icon and Label -->
        <button class="circle-button police-button" on:click={() => handleButtonClick('Police')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128">
                <!-- Police icon SVG paths -->
                <path fill="#82aec0" d="..."/>
            </svg>
            <span class="button-label">Police</span>
        </button>

        <!-- Others Button with Icon and Label -->
        <button class="circle-button others-button" on:click={() => handleButtonClick('Others')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128">
                <!-- Customize with the appropriate SVG paths for "Others" -->
                <path d="..."/>
            </svg>
            <span class="button-label">Others</span>
        </button>
    </div>
</div>
