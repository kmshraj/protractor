var loginpage = function() {
  this.username = element(by.id('username'));
  this.pasword = element(by.id('password'));
  this.next= element(by.buttonText('Next'));
  //this.next= element(by.css('[ng-click="appCtrl.stepOne()"]'));
  this.loginButton = element(by.buttonText('Log In'));
 
  this.login = function() {
    this.loginButton.click();
  };
  };
 var page = new loginpage();
  
  function comparecsspathandtext(path,text){//generic function to verify text by css path
	 
		
		var actual =element(by.css(path))
		expect(actual.getText()).toEqual(text);
		actual.click();
 };
 
 
 
describe('secure mail', function() {
		beforeEach(function() {
			
			browser.get(browser.params.link.url);
			browser.driver.manage().window().setSize(1600, 800);
			browser.waitForAngular();
			
			browser.ignoreSynchronization = true;
			
			
		});	
		
		
		/*afterEach(function() {
			browser.ignoreSynchronization = false;
			browser.manage().logs().get('browser').then(function(browserLog) {
			expect(browserLog.length).toEqual(0);//expected 0 errors
			if (browserLog.length) console.error('log: ' + JSON.stringify(browserLog));//get contents of the error
			
			//console.log('log: ' + require('util').inspect(browserLog));
    });
  });*/
 it('should verify all link text in home page', function() {
	    
		page.username.sendKeys(browser.params.login.user);//enter username
		browser.wait(protractor.ExpectedConditions.visibilityOf(page.next),1000);// wait for next button to load
		page.next.click();// click next
		browser.driver.sleep(1000); // using sleep
		comparecsspathandtext('[ng-click="appCtrl.reset()"]','Log in as a different user.'); // verify log in as different user link text
		//experiment to use then function
		/*page.next.click().then(function (){
		comparecsspathandtext('[ng-click="appCtrl.reset()"]','Log in as a different user.')
		}); */ 
		expect(browser.getCurrentUrl()).toEqual(browser.params.link.url);//verify the url
		page.username.sendKeys(browser.params.login.user);//enter username
		browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.buttonText('Next'))));//wait for next button to load
		page.next.click();// click next
		browser.driver.sleep(1000);
		comparecsspathandtext('[href="#/forgot-password"]','Forgot your password?') // verify fortgot your password link text
		//experiment to use then function
		/*page.next.click().then (function (){
		comparecsspathandtext('[href="#/forgot-password"]','Forgot your password?')
		});*/   
		browser.driver.sleep(1000);
		var resetpwd = element(by.model('forgotPasswordControllerCtrl.username'))//verify email address is autofilled
		expect(resetpwd.getAttribute('value')).toEqual(browser.params.login.user); // verify email address filled in username text box not using get attribute so we are not calling the comparesspathandtext
		browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.buttonText('Reset Password'))));//wait for reset password button to load
		expect(element(by.buttonText('Reset Password')).isPresent()).toBe(true);// verify password text box is present and enabled
		comparecsspathandtext('[href="#/login"]','Never mind, take me back to the login page.')	//verify never mind link text
		expect(element(by.id('password')).isEnabled()).toBe(true); // password text box is present and enabled
		expect(element(by.buttonText('Log In')).isEnabled()).toBe(false);//  verify log in button is not enabled
		});
 it('should accept username and password', function() {
		expect(page.next.isEnabled()).toBe(false);//  verify next button is not enabled
		page.username.sendKeys(browser.params.login.user);// enter username
		expect(page.next.isEnabled()).toBeTruthy();// verify next button is enabled
		page.next.click();// click next
		browser.wait(protractor.ExpectedConditions.visibilityOf(page.pasword),5000);//wait until password text box appears
		expect(page.pasword.isEnabled()).toBeTruthy();// verify next button is enabled
		page.pasword.sendKeys(browser.params.login.pwd);//enter password
        page.loginButton.click();//click login		
  });

  it('Throws error for invalid username', function() {
		page.username.sendKeys(browser.params.login.invaliduser);//enter invalid username
		page.next.click();
		browser.wait(protractor.ExpectedConditions.visibilityOf(page.pasword),5000);
		page.pasword.sendKeys(browser.params.login.pwd);
		page.loginButton.click();
		browser.driver.sleep(5000);
		browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.binding('appCtrl.errorMessage'))),5000);	//wait for error message to appear
		expect(element(by.css('[class="form-group ng-scope"]')).getText()).toBe("Invalid user name, password or permissions."); //verify error text
		
  });
  it('Throws error for invalid password', function() {
		page.username.sendKeys(browser.params.login.user);//enter valid username
		page.next.click();
		browser.wait(protractor.ExpectedConditions.visibilityOf(page.pasword),5000);
		page.pasword.sendKeys(browser.params.login.invalidpassword);//enter invalid password	
        page.loginButton.click();
		browser.driver.sleep(5000);
		browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.binding('appCtrl.errorMessage'))),5000); // wait for error message to appear
        expect(element(by.css('[class="panel-body text-danger panel-half-padding ng-binding"]')).getText()).toContain('Invalid user name, password or permissions.'); //verify error text
  });
  
  it('should accept username and password and check inbox', function() {
		expect(page.next.isEnabled()).toBe(false);//verify next button is not enabled
		page.username.sendKeys(browser.params.login.user);//enter username
		expect(page.next.isEnabled()).toBeTruthy();//verify next button is enabled
		page.next.click();
		browser.wait(protractor.ExpectedConditions.visibilityOf(page.pasword),5000);
		page.pasword.sendKeys(browser.params.login.pwd);//enter password
        page.loginButton.click();
		browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.className('visible-lg user-info-popover ng-scope dropdown'))),5000);
		var loggedin = element(by.className('visible-lg user-info-popover ng-scope dropdown'))//verify the username is persent after sucessfull lognine
		expect(loggedin.getText()).toEqual(browser.params.login.user);
		element(by.className('icon-arrows-ccw')).isEnabled();//verfy refresh button is enabled in the inbox
		
  });
  
  it('allow compose mail after sucessful log in', function() {
	    
		expect(page.next.isEnabled()).toBe(false);//next button is not enabled
		page.username.sendKeys(browser.params.login.user);//enter username
		browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.buttonText('Next'))),1000);
		page.next.click();
		browser.wait(protractor.ExpectedConditions.visibilityOf(page.pasword),5000);
		page.pasword.sendKeys(browser.params.login.pwd);//enter password
        page.loginButton.click();
		browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.buttonText('Compose'))));
		element(by.buttonText('Compose')).click();// click on compose mail
		var email= element(by.xpath('//*[@id="sendEmailForm"]/div[1]/div[2]/div[1]/div[2]/div/div[1]/input')).sendKeys(browser.params.login.user);//enter email address in to field
		email.sendKeys(protractor.Key.ENTER);//key enter
		element(by.xpath('//*[@id="sendEmailForm"]/div[1]/div[2]/div[3]/div[2]/input')).sendKeys('Test Mail');//fill subject filed with test mail
		element(by.xpath('//*[@id="sendEmailForm"]/div[3]/div[2]/div[6]')).sendKeys('This is a test mail');// fill body with this is a test mail
		element(by.buttonText('Send')).click();//click send
		browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.binding('message.text'))),5000);
		//var error = element(by.binding('message.text'))
		expect(element(by.binding('message.text')).getText()).toContain('The email cannot be sent to the following external recipient(s):\n\nkameshrrajendran@gmail.com');
		//expect(error.getText()).toEqual('The email cannot be sent to the following external recipient(s):\n\nkameshrrajendran@gmail.com');//verify error pop us as email id outside domain is not allowed
		
  });
  
  
});