Meteor.startup(function () {
SSLProxy({
       port: 6002, //or 443 (normal port/requires sudo)
       ssl : {
            key: Assets.getText("key.pem"),
            cert: Assets.getText("cert.pem"),

            //Optional CA
            //Assets.getText("ca.pem")
       }
    });
	var future= Meteor.npmRequire('fibers/future');
	if(Meteor.settings.deploy){
		var settings= Meteor.settings;

		ServiceConfiguration.configurations.remove({
		    service: 'facebook'
		});

		ServiceConfiguration.configurations.insert({
		    service: 'facebook',
		    appId: settings.facebook.appId ||'1734700473442235',
		    secret: settings.facebook.secret ||'bdec54e38b5ce82556677a358eba1cb6',
		    requestPermission: ['email','publish_actions']
		});

		Accounts.loginServiceConfiguration.remove({
		  service: "twitter"
		});
		
		Accounts.loginServiceConfiguration.insert({
		  service: "twitter",
		  consumerKey: settings.twitter.consumerKey ||"PwdsVBXRneX7REuJ8mclsoyUd",
		  secret: settings.twitter.secret|| "vrNbytV4fYBB1x9Lg3aTdasYG3K6jDOiVhTnxSeNDoPNZMMwfq",
		  requestPermission: ['email']
		});


		Accounts.loginServiceConfiguration.remove({
		  service: "google"
		});
		Accounts.loginServiceConfiguration.insert({
		  service: "google",
		  clientId: settings.google.clientId ||"73671199506-23bht3u01gl4gkcao2h0ltf0cp7sufbq.apps.googleusercontent.com",
		  secret: settings.google.secret ||"GndJ_dbPj1VbYTQxrhKhUe9I",
		  requestPermission: ['email']
		});
	}else{ //localhost
		ServiceConfiguration.configurations.remove({
		    service: 'facebook'
		});

		ServiceConfiguration.configurations.insert({
		    service: 'facebook',
		    appId: '1734700473442235',
		    secret: 'bdec54e38b5ce82556677a358eba1cb6',
		    requestPermission: ['email','publish_actions']
		});

		Accounts.loginServiceConfiguration.remove({
		  service: "twitter"
		});
		
		Accounts.loginServiceConfiguration.insert({
		  service: "twitter",
		  consumerKey: "PwdsVBXRneX7REuJ8mclsoyUd",
		  secret: "vrNbytV4fYBB1x9Lg3aTdasYG3K6jDOiVhTnxSeNDoPNZMMwfq",
		  requestPermission: ['email']
		});


		Accounts.loginServiceConfiguration.remove({
		  service: "google"
		});
		Accounts.loginServiceConfiguration.insert({
		  service: "google",
		  clientId: "73671199506-23bht3u01gl4gkcao2h0ltf0cp7sufbq.apps.googleusercontent.com",
		  secret: "GndJ_dbPj1VbYTQxrhKhUe9I",
		  requestPermission: ['email']
		});
	}


});
