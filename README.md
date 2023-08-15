# tvo-cypress
Cypress tests for tvolearn.com

#### Test Automation Details
This document explains the various activities performed as part of the testing of the https://tvolearn.com/ website.

#### Tools & Programming language
Programming Language: Java, Javascript

Automation tools: Selenium, Cypress

#### Test Cases Covered
##### learning ActivitiesTest.java:
This file click all links under “Learning Activities” section and goes back to the original tab after each link click
##### resourcesForLearningTest.java:
This file checks all the video links under “Resources for Learning” section and validates the links for broken links. It returns ok if 200 is received and returns existing broken links on the console
##### constants.js: 
Information that is static throughout the application such as browser URL is stored in this file
##### init.js: 
This file contains tests performed to check the functionality of Grade 1->Science and Technology which covers:
- Verification of successful Science and Technology page load
- Verification of Learning Activities section
- Verification of Resources for Learning section
- Verification of Vocabulary exists section
- Verification of Apply the Learning Section
- Changing to a different subject and ensuring correct content is displayed
- Ensuring all the social media links work as expected
- Ensuring footer links such as Privacy Policy, Terms of Use navigate to the correct pages and work as expected
##### resourcedForLearning.js: 
This file verifies the navigation of all video links under this section 

#### Reporting
- Test results have been tracked using the `cypress mochawesome reporter` and can be seen in `index.html` under `cypress/reports/html`.
- Videos are configured to be displayed for failed test cases and can be found under cypress/videos.

<img width="1150" alt="Screen Shot 2023-08-15 at 10 23 12 AM" src="https://github.com/RojaDK/tvo-cypress/assets/142321586/102fbe81-0e4e-45ed-aa83-2f8839c16659">
