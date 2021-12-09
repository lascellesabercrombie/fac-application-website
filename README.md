# fac-application-website

## Summary

A website and application for the Founders and Coders programme. View the live website [at this link](https://lascellesabercrombie.github.io/fac-application-website/) or on the right. 

## Details

### Overview

The website has two main text-sections: an About Me and my specific reasons for applying to FAC. In addition, there is a fixed bar at the top, allowing for internal navigation on the page, a project gallery consisting mostly of FAC prompts, and a bar at the bottom linking to my profiles on freeCodeCamp and codecademy as well as to the GitHub repo for the website. It is designed primarily for mobile, but I have used flexbox and media queries to enable it to accommodate larger screen sizes. 

### The Button

Perhaps the most distinctive feature of this website, however, is the big button allowing the viewer to switch between English and Yiddish versions of the website. I talk a bit more about the motivation for the feature on the website. One aspect that made me particularly curious to experiment with such a button was that Yiddish is written right to left. I wanted to see how this would play out in terms of website design. I found [this article](https://medium.muz.li/web-design-for-right-to-left-languages-the-basics-287329d508cf) useful for thinking about some of what this process would require.

On clicking the button, two main things happen: 

1. The website hides the English text and reveals the Yiddish text.
2. The flexbox containers of the navigation bar and the project gallery change direction, to make a more intuitive reading experience for the reader in Yiddish. 

On clicking again, these things change back.

In the case of (1) and (2), the change was effected through JS functions applying and removing CSS classes from elements in the HTML. 

### Sources

On advice given by Jo in one of the FAC workshops, I used [Coolors](https://coolors.co/) to generate the colour scheme. The design of the project gallery was influenced in part by the Whitechapel Gallery [website](https://www.whitechapelgallery.org/). 

## Requirements

The website was designed to fulfil [these requirements](https://www.foundersandcoders.com/requirements/website), which I've also copied out below: 

### General criteria 

- [x] All code is written by you
- [x] No external libraries (e.g. no Bootstrap, React or GitHub Pages themes, but external fonts/icons are fine)
- [x] Tells us about why you are applying for the programme
- [x] Hosted on GitHub Pages
- [x] Links back to the GitHub repository that contains the code for your site
- [x] Links to your public freeCodeCamp profile
- [x] Shows your progress through the weekly prompts (e.g. links to repos, as a project gallery, or in an image carousel)

### Technical criteria 

- [x] Semantic HTML5 elements
- [x] CSS grid or flexbox layout (or both)
- [x] DOM event listeners for user interaction (e.g. click, keydown)
- [x] DOM updates in response to user interaction (e.g. showing/hiding an element, changing text or styles)

## Acknowledgements

I benefited a lot from FAC's workshops and meetups. I owe particular thanks to Petra and Raymond for their help on the project gallery, and to Sonia and Danilo for their help in thinking through some of the early stages of how the button might be set up.
