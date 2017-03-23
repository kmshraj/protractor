var HtmlReporter = require('C:/Users/khr1scp/AppData/Roaming/npm/node_modules/protractor-jasmine2-screenshot-reporter');
exports.config = {
	  allScriptsTimeout: 11000,
      seleniumAddress: 'http://localhost:4444/wd/hub',
	
		params: {
    login: {
      user: 'kameshrrajendran@gmail.com',
      pwd: '**********',
	  invaliduser: 'kmshraj@tmail.com',
	  invalidpassword: '*********'
	  
    },
	link: {
		url: 'https://login-alpha.mimecast.com/m/secure/login/?tkn=X7es3LYKoAWxdXtNuN3Ex0fWgm_rWwkyRe5QE6gpJvmE2gSs-EmDXsbtXXSrwkG-fMQxnUGvUbNC2QOxhqLq1-byQqjIHSF9fFqPip9OA1QWyE8VqeovAtoKjki19T0Kg36F7sDA0YWiroTGKzxdlnWi-alcsmOTby52IyeZoyM#/login'
	}
	
  },
      specs: ['mime.js'],

   
	onPrepare: function() {
		browser.driver.manage().window().setSize(1600, 800);//resize browser
		jasmine.getEnv().addReporter(new HtmlReporter({   //jasmine html report
		savePath: 'C:\Users\khr1scp\Desktop\protractor' //path for screenshot
	})); 
	
	},
	  
   };
