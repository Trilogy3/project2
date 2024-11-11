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
    <h1>EMERGENCY HOTLINE AND DISASTER READINESS APPLICATION</h1>
    <p>Your One Tap Assistance for Emergency!</p>

    <div class="button-container">
        <!-- Fire Button with Icon and Label -->
        <button class="circle-button fire-button" on:click={() => handleButtonClick('Fire')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><radialGradient id="notoFire0" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse"><stop offset=".314" stop-color="#ff9800"/><stop offset=".662" stop-color="#ff6d00"/><stop offset=".972" stop-color="#f44336"/></radialGradient><path fill="url(#notoFire0)" d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5"/><radialGradient id="notoFire1" cx="64.921" cy="54.062" r="73.86" gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)" gradientUnits="userSpaceOnUse"><stop offset=".214" stop-color="#fff176"/><stop offset=".328" stop-color="#fff27d"/><stop offset=".487" stop-color="#fff48f"/><stop offset=".672" stop-color="#fff7ad"/><stop offset=".793" stop-color="#fff9c4"/><stop offset=".822" stop-color="#fff8bd" stop-opacity="0.804"/><stop offset=".863" stop-color="#fff6ab" stop-opacity="0.529"/><stop offset=".91" stop-color="#fff38d" stop-opacity="0.209"/><stop offset=".941" stop-color="#fff176" stop-opacity="0"/></radialGradient><path fill="url(#notoFire1)" d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.1 16.1 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88"/></svg>
            <span class="button-label">Fire</span>
        </button>

        <!-- Medical Button with Icon and Label -->
        <button class="circle-button medical-button" on:click={() => handleButtonClick('Medical')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#82aec0" d="M118.4 112.29c-.54-2.88-2.62-18.81-2.62-18.81H12.22s-2.08 15.93-2.62 18.81S15.23 124 64 124s54.94-8.83 54.4-11.71"/><path fill="#e0e0e0" d="M12.19 93.96c0-5.87 23.2-10.63 51.81-10.63s51.81 4.76 51.81 10.63s-23.2 11.6-51.81 11.6s-51.81-5.73-51.81-11.6"/><path fill="#f44336" d="M97.78 16.32C94.94 7.27 85.48 4 63.99 4S33.05 7.27 30.21 16.32c-5.72 18.23-10.86 75.71-10.86 75.71s4.47 7.49 44.65 7.49s44.66-7.48 44.66-7.48s-5.16-57.49-10.88-75.72"/><path fill="#c62828" d="M19.34 92.14c0-4.6 19.99-8.33 44.66-8.33s44.66 3.73 44.66 8.33s-19.99 9.09-44.66 9.09s-44.66-4.49-44.66-9.09" opacity="0.9"/><radialGradient id="notoPoliceCarLight0" cx="64" cy="52.903" r="43.973" gradientTransform="translate(.558 .558)scale(.9913)" gradientUnits="userSpaceOnUse"><stop offset=".572" stop-color="#ff6e40"/><stop offset=".768" stop-color="#ff7046" stop-opacity="0.541"/><stop offset="1" stop-color="#ff7555" stop-opacity="0"/></radialGradient><path fill="url(#notoPoliceCarLight0)" d="M72.59 35.73L94.42 13.2c.42-.37 1.04.1.8.6L78.98 39.86c-1.21 2.52-.14 4.15 2.66 4.08l20.65-.21c.56-.01.73.75.22.98l-18.84 7.26c-2.55 1.15-3.09 3.88-.91 5.62l23.49 16.94c.44.35.08 1.04-.46.89L79.06 64.35c-2.69-.76-3.92.73-3.37 3.47l8.62 28.89c.11.55-.61.85-.92.39L68.68 71.05c-1.57-2.31-3.47-2.75-4.8-.3L49.77 97.43c-.27.49-1.01.26-.96-.3l7.29-28.79c.28-2.78-1-3.36-3.6-2.34L22.25 81.51c-.52.2-.94-.45-.54-.84L47.09 59.6c2-1.95 1.91-4.08-.74-4.97l-21.18-7.22c-.53-.18-.43-.95.12-.99l20.84.4c2.79-.21 4.2-2.99 2.74-5.37L32.12 17.3c-.29-.48.28-1.01.73-.68l22.34 19.4c2.27 1.63 4.26 1.48 4.67-1.28l3.63-26c.08-.55.86-.59 1-.05l3.16 25.38c.7 2.71 2.84 3.51 4.94 1.66"/><path fill="#ffd5ca" d="m65.85 34.06l9.36-16.89c.28-.48 1.02-.23.95.32l-2.92 18.45c-.34 2.77 1.2 3.98 3.82 3.02l18.33-6.16c.52-.19.93.47.52.85L81.55 45.91c-2.05 1.9-1.69 4.66.94 5.61l18.32 6.21c.52.19.41.96-.15.99l-19.52.39c-2.79.14-3.48 1.95-2.08 4.37l9.86 16.84c.28.48-.31 1-.75.66l-14.73-12.2c-2.23-1.68-4.16-1.5-4.64 1.25l-3.5 19.94c-.1.55-.88.57-1 .03l-3.64-19.77c-.62-2.72-2.02-2.86-4.16-1.07L41 82.19c-.43.36-1.04-.13-.78-.62l9.11-16.74c1.27-2.49.51-4.47-2.29-4.47l-19.66.25c-.56 0-.71-.76-.2-.98l17.16-6.61c2.57-1.09 3.02-4.17.88-5.97l-14.4-11.73c-.43-.36-.05-1.04.48-.88l18.17 5.44c2.67.82 4.51.04 4.02-2.71l-3.77-19.01c-.1-.55.63-.83.93-.37l10.01 16.26c1.51 2.35 3.8 2.43 5.19.01"/></svg>
            <span class="button-label">Police</span>
        </button>

        <!-- Others Button with Icon and Label -->
        <button class="circle-button others-button" on:click={() => handleButtonClick('Others')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22.025q-.4 0-.763-.15t-.662-.425L2.55 13.425q-.275-.3-.425-.663T1.975 12t.15-.775t.425-.65l8.025-8.025q.3-.3.663-.438T12 1.975t.775.138t.65.437l8.025 8.025q.3.275.438.65t.137.775t-.137.763t-.438.662l-8.025 8.025q-.275.275-.65.425t-.775.15m0-2L20.025 12L12 3.975L3.975 12zM12 13q.425 0 .713-.287T13 12V8q0-.425-.288-.712T12 7t-.712.288T11 8v4q0 .425.288.713T12 13m0 3q.425 0 .713-.288T13 15t-.288-.712T12 14t-.712.288T11 15t.288.713T12 16m0-4"/></svg>
            <span class="button-label">Others</span>
        </button>
    </div>
</div>
