define(["intern!object",
        "intern/chai!assert",
        "common/Path"], function(
        		registerSuite,
        		assert,
        		Path){
	
	registerSuite({
		name: "Path",
		setup: function(){

		},
		
		"get segment count": function(){
			var pathname = "/a";
			var path = new Path(pathname);
			assert.equal(1, path.segmentCount());
			
			pathname = "/a//b";
			path = new Path(pathname);
			assert.equal(2, path.segmentCount());
		},
		
		"get segment": function(){
			var pathname = "/a//b";
			var path = new Path(pathname);
			assert.equal("a", path.segment(0));
			assert.equal("b", path.segment(1));
		},
		
		teardown: function(){

		}
		
	});
	
});