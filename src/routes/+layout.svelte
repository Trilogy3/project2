<script>
	import "../app.css";
</script>

<style>  /*  */
/* navbar */
.body {
    /* Set your background image URL here */
    background-image: url('https://www.shutterstock.com/shutterstock/videos/3491716385/thumb/1.jpg?ip=x480'); /* Replace with your image link */
    background-size: cover; /* This will make sure the image covers the entire area */
    background-position: center; /* This will center the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    min-height: 100vh; /* Ensures the body takes at least the full viewport height */
	font-family: poppins;
	font-weight: bold;
	overflow-x: hidden;
}
.navbar {
    width: 100%;
    padding: 1rem;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

}

/* Center the h1 within the navbar */
.navbar h1 {
    margin: 0;
    font-size: 1.5rem;
    flex: 1; /* Allows h1 to take available space */
    text-align: center; /* Centers the text */
}

/* Additional styling */
.icon-button {
    background: transparent; /* Or any other styles you prefer */
    border: none;
    cursor: pointer;
}

.navbar-links {
    display: flex;
    gap: 1rem;
}

.navbar a {
    color: white;
    text-decoration: none;
}

.navbar a:hover {
    text-decoration: underline;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
    .navbar h1 {
        font-size: 1.2rem;
    }
}

/* for footer */
  main {
    min-height: calc(100vh - 50px);
    padding-bottom: 50px;
  }

  .footer {
    padding: 0.5rem; /* Reduced padding for a smaller footer */
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    display: flex;
    justify-content: space-evenly; /* Distributes space evenly between items */
    align-items: flex-start; /* Align items to the top */
    position: fixed; /* Fixed at the bottom */
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10;
}

.link-container {
    display: flex;
    flex-direction: column; /* Stack logo above text */
    align-items: center; /* Center items horizontally */
    margin: 0; /* Remove margin for even spacing */
    transition: transform 0.2s; /* Smooth scaling effect */
    padding: 0.5rem; /* Padding for clickable area */
    border-radius: 50%; /* Makes the hover effect circular */
    background-color: transparent; /* Default background */
    position: relative; /* For positioning the hover effect */
    transition: background-color 0.2s, box-shadow 0.2s; /* Smooth background and shadow transitions */
}

/* Combined hover effects for .link-container */
.link-container:hover {
    background-color: rgba(255, 215, 0, 0.3); /* Light yellow background on hover */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Subtle shadow */
    transform: scale(1.1); /* Scale up slightly */
}

.links {
    text-decoration: none; /* Remove underline */
    color: rgb(99, 99, 99); /* Text color */
    text-align: center; /* Center the text */
    transition: color 0.2s; /* Smooth color transition */
    font-size: 0.9rem; /* Slightly smaller font size */
}

.links:hover {
    color: #000000; /* Change text color on hover */
    text-decoration: none; /* Add underline */
}

.links svg {
    width: 30px; /* Reduced icon size */
    height: 30px; /* Reduced icon size */
    margin-bottom: 0.3rem; /* Space between logo and text */
    transition: fill 0.2s; /* Smooth color transition for SVG */
}

.links:hover svg {
    fill: #000000; /* Change icon color on hover */
    transform: scale(1.3); /* Slightly scale up the icon */
}

</style>

<div class="body">
	<div class="navbar">
		<button class="icon-button" aria-label="Menu button">
			<svg class="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6H6m12 4H6m12 4H6m12 4H6"/>
			</svg>
		</button>
		<h1>Emergency Response</h1>
	</div>

	<footer class="footer">
		<a class="links" href="/home">
			<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
				<path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
			  </svg>
			Home
		</a>
		<a class="links" href="/request">
			<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
				<path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
			  </svg>
			Request
		</a>
		<a class="links" href="/status">
			<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
			  </svg>
			Status
		</a>
		<a class="links" href="/hotlines">
			<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"/>
			  </svg>
			  
			Hotlines
		</a>
	</footer>
</div>


<slot></slot>
