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
        <!-- Fire Button with Icon -->
        <button class="circle-button fire-button" on:click={() => handleButtonClick('Fire')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128">
                <!-- Fire icon SVG paths -->
                <radialGradient id="notoFire0" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse">
                    <stop offset=".314" stop-color="#ff9800" />
                    <stop offset=".662" stop-color="#ff6d00" />
                    <stop offset=".972" stop-color="#f44336" />
                </radialGradient>
                <path fill="url(#notoFire0)" d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5" />
            </svg>
           
        </button>

        <!-- Medical Button with Icon -->
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
        
        </button>

        <!-- Police Button with Icon -->
        <button class="circle-button police-button" on:click={() => handleButtonClick('Police')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128">
                <!-- Police icon SVG paths -->
                <path fill="#82aec0" d="M118.4 112.29c-.54-2.88-2.62-18.81-2.62-18.81H12.22s-2.08 15.93-2.62 18.81S15.23 124 64 124s54.94-8.83 54.4-11.71" />
                <path fill="#e0e0e0" d="M12.19 93.96c0-5.87 23.2-10.63 51.81-10.63s51.81 4.76 51.81 10.63s-23.2 11.6-51.81 11.6s-51.81-5.73-51.81-11.6" />
            </svg>
          
        </button>

        <!-- Others Button with Icon -->
        <button class="circle-button others-button" on:click={() => handleButtonClick('Others')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128">
                <!-- Customize with the appropriate SVG paths for "Others" -->
                <path d="..."/>
            </svg>
        
        </button>
    </div>
</div>
