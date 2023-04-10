/* FORM WIZARD VALIDATION SIGN UP ======================================== */

$('form#custom').attr('action', 'quotation-wizard-send.php');

$(function() {
'use strict';
				$('#custom').stepy({
					backLabel:	'Previous step',
					block:		true,
					errorImage:	true,
					nextLabel:	'Next step',
					titleClick:	true,
					description:	true,
					legend:			false,
					validate:	true
				});
				
				
				$('#custom').validate({
	
					errorPlacement: function(error, element) {
						
					$('#custom .stepy-error').append(error);
					}, rules: {
						'location':		'required',
						'armored_door':	'required',
						'windows':		'required',
						'zones':		'required',
						'accesses[]':	'required',
						'budget':		'required',
						'firstname_quote':		'required',
						'lastname_quote':		'required',
						'email_quote':		'required',
						'phone_quote':	'required',
						'message_general':		'required',
						'terms':		'required' 	// BE CAREFUL: last has no comma
					}, messages: {
						'location':		{ required: 	 'Location required' },
						'armored_door':	{ required: 	 'Armored door required' },
						'windows':		{ required: 	 'Windows required' },
						'zones':		{ required: 	 'Areas required' },
						'accesses[]':	{ required: 	 'Accesses required' },
						'budget':		{ required: 	 'Budget required' },
						'firstname_quote':		{ required: 	 'First name required' },
						'lastname_quote':		{ required: 	 'Last name required' },
						'email_quote':		{ required: 	 'Email required' },					
						'phone_quote':	{ required:  'Phone required' },
						'message_general':		{ required:  'Description required' },
						'terms':		{ required:  'Please accept terms' },
					},
					submitHandler: function(form) 
					{
					if($('input#website').val().length == 0)
					{ 
					form.submit();
					}
					}
				});

			});
			