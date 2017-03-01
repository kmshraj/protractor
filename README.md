# Install protractor
 Write a script, in an editor of your choice, which needs to include each of the test cases below. Divide each test case in the script using a separate Jasmine ‘it’ clause, each ‘it’ clause falling, of course, inside the script’s parent ‘describe’ clause. 
beforeEach and afterEach clauses are optional, if needed but not mandatory.
Results should be output in verbose manner, to 1) the console using console.log, and 2) via a Jasmine assertion for each case. 
For any re-usable generic code (including element definitions), create a separate library .js for it and call it from the test script using the javascript ‘require’ statement. Credit will be given if this is done, if generic code is found to exist in the script. 
Case 1:
Verify the following elements are present on the login page after navigation to the page: Email address and Next button. Verify that the former, also, is enabled and the latter disabled.
Case 2:
Verify the following additional elements are present on the login page after a correct user address has been entered: authentication type drop-down list, password. Both of these elements should be enabled and verify the link text is as expected (the app text is the correct text). Verify that the ‘Login as a different user’ button returns the user to the initial login page and that the link text is as expected (the app text is the correct text). Verify that that the reset password navigates the user to the reset page, and that the following elements, all enabled, are present on the reset page: Email address to reset, reset button, ‘never mind take me back’ link. Verify the link text is as expected (the app text is the correct text). Verify that the ‘Never mind’ link takes the user back to the login page with the Password element present and enabled, and the Login button present and disabled.
Case 3:
Verify that the user cannot log into the Secure Messaging site with an invalid user address. (error text – match expected text message)
Case 4:
Verify that the user cannot log into the Secure Messaging site with an invalid password. (error text – match expected text message)
Case 5:
Verify that the user can login with correct user address and password (I.e. Your address and your changed password). Verify that e.g. The inbox refresh button is present and visible, in order to do this. 
Case 6: [optional]
Verify that the user, when logged in, can compose and send a message.

 

Hint: after each case, call the browser.get(<URL>) function to return to a fresh condition start for the next case.
