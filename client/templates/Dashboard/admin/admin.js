
Template.admin.helpers({
	anyPost:function(){
		return (Events.find({}, {sort: {timestamp: -1}}).count()>0)?true:false;
		//return (Posts.find({"validTill":{"$gt":new Date()}}).count()>0)?true:false;
	},
	allPosts: function(){
		var count=1;
		var x = Events.find({}, {sort: {timestamp: -1}}).fetch();
		x.forEach(function(sos){
			sos.index=count++;
		});
		return x;
	}
});

Template.admin.events({
	'click .postDetails': function(event, template){
		Session.set("id",this._id);
		console.log(this._id);
	}
});

Template.admin.onRendered(function(){
	var d= document.createElement('div');
	  d.innerHTML='<i class="fa fa-video-camera">';
	  $(document.body).append($(d).addClass('floater-closed').addClass('floater'));
	  var open =false;
	  $('.floater').click(function(){
	    if(open===false){
	      var iframe = document.createElement('iframe');
	      iframe.src = "http://mercury.dmwilson.info:3000/help/"+Session.get('id')+'?support=true';//change
	      $(this).append(iframe);
	      $(this).removeClass('floater-closed').addClass('floater-open');   
	      
	      open=true;
	    }else{
	      $('iframe').remove();
	      $(this).removeClass('floater-open').addClass('floater-closed')
	      open=false;
	    }
	  })
});