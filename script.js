// JavaScript
const aboutJapanBtn = document.getElementById('aboutJapanBtn');
const aboutJapanContent = document.getElementById('aboutJapanContent');
aboutJapanBtn.addEventListener('click', () => {
    if (aboutJapanContent.style.display === 'none') {
        aboutJapanContent.style.display = 'block';
    } else {
        aboutJapanContent.style.display = 'none';
    }
});
function toggleJobListing() {
  var jobListingSection = document.getElementById("job-listing");
  // Toggle the display property
  if (jobListingSection.style.display === "none") {
    jobListingSection.style.display = "block";
  } else {
    jobListingSection.style.display = "none";
  }
  // Smooth scroll to the About Japan section
  jobListingSection.scrollIntoView({ behavior: 'smooth' });}    

function toggleAboutJapan() {
    var aboutJapanSection = document.getElementById("about-japan");
    // Toggle the display property
    if (aboutJapanSection.style.display === "none") {
      aboutJapanSection.style.display = "block";
    } else {
      aboutJapanSection.style.display = "none";
    }
    // Smooth scroll to the About Japan section
    aboutJapanSection.scrollIntoView({ behavior: 'smooth' });
  }
  function toggleCulture() {
    var cultureSection = document.getElementById("culture");
    // Toggle the display property
    if (cultureSection.style.display === "none") {
      cultureSection.style.display = "block";
    } else {
      cultureSection.style.display = "none";
    }
    // Smooth scroll to the About Japan section
    cultureSection.scrollIntoView({ behavior: 'smooth' });
  }
  function toggleTouristPlaces() {
    var touristPlacesSection = document.getElementById("tourist-places");
    // Toggle the display property
    if (touristPlacesSection.style.display === "none") {
        touristPlacesSection.style.display = "block";
    } else {
        touristPlacesSection.style.display = "none";
    }
    // Smooth scroll to the About Japan section
    touristPlacesSection.scrollIntoView({ behavior: 'smooth' });
  }

 