
/*
* Main navigation accordions 
*/

let accordionButtons = document.getElementsByClassName('muf-accordion-button')

for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener('click', toggleAccordion, false)
}

function toggleAccordion(event) {
    event.preventDefault()
    let accordionItem = this.parentNode
    if (this.getAttribute('aria-expanded') === 'false') {
        // First, close all the accordions
        for (let i = 0; i < accordionButtons.length; i++) {
            accordionButtons[i].setAttribute('aria-expanded', false)
        }

        // Next, open the one clicked
        this.setAttribute('aria-expanded', true)
    } else {
        // It's already open, so close it.
        this.setAttribute('aria-expanded', false)
    }
}

/*
* Show/hide the menu 
*/

let body = document.body

let menuOpenButton = document.getElementById('muf-menu-trigger-open')
let menuCloseButton = document.getElementById('muf-menu-trigger-close')

menuOpenButton.addEventListener('click', openMenu, false)

menuCloseButton.addEventListener('click', closeMenu, false)

function openMenu(event) {
	body.classList.add("show-menu")
}

function closeMenu(event) {
	body.classList.remove("show-menu")
}

/*
* Show/hide the search 
*/

let searchOpenButton = document.getElementById('muf-search-trigger-open')
let searchCloseButton = document.getElementById('muf-search-trigger-close')

searchOpenButton.addEventListener('click', openSearch, false)

searchCloseButton.addEventListener('click', closeSearch, false)

function openSearch(event) {
	body.classList.add("show-search")
	document.getElementById('muf-search-box-desktop').focus()
}

function closeSearch(event) {
	body.classList.remove("show-search")
}

/*
* Allow the search to submit on enter keypress 
*/

let searchInput = document.getElementById("muf-search-box")
let searchButton = document.getElementById("muf-search-button")

searchInput.addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    event.preventDefault()
    searchButton.click()
  }
})

/*
* Deal with the section nav open/close 
*/

let sectionNavTrigger = document.getElementById('muf-section-nav-trigger')

if (sectionNavTrigger) {
    sectionNavTrigger.addEventListener(
        'click', 
        function() {
            if (this.getAttribute('aria-expanded') === 'false') {
                this.setAttribute('aria-expanded', true)
            } else {
                this.setAttribute('aria-expanded', false)
            }
        }, 
        false
    )
}

/*
* Tabbed Content 
*/

let tabButtons = document.getElementsByClassName('muf-tab-button')
let tabPanels = document.getElementsByClassName('muf-tab-panel')

// Start by hiding all the tab panels
for (let i = 0; i < tabPanels.length; i++) {
    tabPanels[i].classList.add('hidden')
}

// Add click event for the tab buttons
for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', toggleTab, false)
    if (tabButtons[i].getAttribute('aria-expanded') === "true") { // If one is set to show by default, click it.
        tabButtons[i].click()
    }
}

function resetTabs() {
    // Hide all the tab panels and reset buttons
    for (let i = 0; i < tabPanels.length; i++) {
        tabPanels[i].classList.add('hidden')
    }

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].setAttribute('aria-expanded', false)
    }
}

function toggleTab(event) {
    event.preventDefault

    let thisTabButton = event.currentTarget

    resetTabs()
    thisTabButton.setAttribute('aria-expanded', true)

    for (let i = 0; i < tabPanels.length; i++) {
        //console.log(tabPanels[i].getAttribute('aria-labelledby'))
        //console.log(thisTabButton.getAttribute('id'))
        if (tabPanels[i].getAttribute('aria-labelledby') == thisTabButton.getAttribute('id')) {
            tabPanels[i].classList.remove('hidden')
        }
    }
}


/*
* News Carousel
*/

// On larger screens the news carousel can be initialized
let w = window.innerWidth;

if (w >= 820) {
    if (document.getElementsByClassName('muf-news-wrapper').length) {
        var newsflkty = new Flickity( '.muf-news-wrapper', {
            "adaptiveHeight" : false, 
            "cellAlign" : "left",
            "pageDots" : false
        });
    }
}

if (w <= 819) {
    if (document.getElementsByClassName('muf-alumni-stats-wrapper').length) {
        var statsflkty = new Flickity( '.muf-alumni-stats-wrapper', {
            "adaptiveHeight" : false, 
            "cellAlign" : "left",
            "pageDots" : false
        });
    }
}

/*
* Video poster swap
*/

let videoPoster = document.getElementsByClassName('muf-video-poster-wrapper')

for (let i = 0; i < videoPoster.length; i++) {
    videoPoster[i].addEventListener('click', showVideo, false)
}

function showVideo(event) {
    this.classList.add('hidden')

    this.nextElementSibling.classList.remove('hidden')
}


/*
* Make some fixes around window resizes
*/

window.addEventListener("resize", resetCarousels);

function resetCarousels() {
    let w = window.innerWidth;

    if (w <= 819) {
        if (document.getElementsByClassName('muf-news-wrapper').length) {
            newsflkty.destroy();
        }
    }

    if (w >= 820) {
        if (document.getElementsByClassName('muf-alumni-stats-wrapper').length) {
            statsflkty.destroy();
        }
    }
}

