(function($){

	var type = false;
	var ua = navigator.userAgent.toLowerCase();

	// Device Object
	var devices = {
		
		"tablet": [
	    	/ipad/i,            // iPads
	    	/playbook/i,        // Blackberry PlayBook
	    	/xoom/i,            // Motorola Xoom
	    	/tablet(?! pc)/i,   // Generic Tablet (matches HP TouchPad),
	    	                    //    excludes tablet pcs
	    	/froyo/i            // Froyo is currently only available to tablets
	    ],
		
		"mobile": [
			/iphone/i,
			/blackberry/i,
			/android/i,
			/mytouch/i,
			/webos/i,
			/(wap|wml)/i
		],
		
		"desktop": [
			/.*/
		]
	};

	// Check Mobile
	$(['tablet', 'mobile', 'desktop']).each(function()
	{
		var key = this.toString()
		for (var i=0; len=devices[key].length,i<len; i++)
		{
			if (devices[key][i].test(ua))
			{
				type = key;
				return false;
			}
		}
	});

	// Assign the device object to jQuery
	$.device = {
		"mobile": type=='mobile'?true:false,
		"tablet": type=='tablet'?true:false,
		"desktop": type=='desktop'?true:false,
		"type": type
	};

})(jQuery);