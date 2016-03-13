var nav = document.getElementById('panel'),
	competitions = document.getElementById('competitions-page'),
	event_category = document.getElementById('event-category-page'),
	event_page = document.getElementById('event-page'),
	accomodation_page = document.getElementById('accomodation-page');
	contact_page = document.getElementById('contact-page');
	sponsors_page = document.getElementById('sponsors-page');
	entry_page = document.getElementById('entry-procedure-page');


for (var i = nav.getElementsByTagName('li').length - 1; i >= 0; i--) {
	nav.getElementsByTagName('li')[i].onclick = function(){

		if ($(window).width()<800){
			$("#toggle").trigger("click");
		}


		switch(this.innerHTML){
			case "Home":
			  $('.title>h2').text('HOME');
				accomodation_page.style.visibility = "hidden";
				competitions.style.visibility = "visible";
				event_category.style.visibility = "hidden";
				event_page.style.visibility = "hidden";
				contact_page.style.visibility = "hidden";
				sponsors_page.style.visibility = "hidden";
				entry_page.style.visibility = "hidden";

				if (document.documentElement.clientWidth>=800){
					competitions.style.left= "10%";
				}
				else{
					competitions.style.left = "0%";
				}
				event_category.style.left = "100%";
				event_page.style.left = "100%";
				accomodation_page.style.left = "100%";
				contact_page.style.left = "100%";
				sponsors_page.style.left = "100%";
				entry_page.style.left = "100%";

				break;

			case "<nobr>Mega-Events</nobr>":
				$('.title>h2').text('MEGA-EVENTS');
				accomodation_page.style.visibility = "hidden";
				event_category.style.visibility = "visible";
				competitions.style.visibility = "hidden";
				event_page.style.visibility = "hidden";
				contact_page.style.visibility = "hidden";
				sponsors_page.style.visibility = "hidden";
				entry_page.style.visibility = "hidden";

				competitions.style.left="-100%";
				event_category.style.left = "0%";
				event_page.style.left = "100%";
				accomodation_page.style.left = "100%";
				contact_page.style.left = "100%";
				sponsors_page.style.left = "100%";
				entry_page.style.left = "100%";

				break;
			case "Competitions":
				$('.title>h2').text('COMPETITIONS');
				accomodation_page.style.visibility = "hidden";
				event_page.style.visibility = "visible";
				event_category.style.visibility = "hidden";
				competitions.style.visibility = "hidden";
				contact_page.style.visibility = "hidden";
				sponsors_page.style.visibility = "hidden";
				entry_page.style.visibility = "hidden";

				competitions.style.left = "-100%";
				event_category.style.left = "-100%";
				event_page.style.left = "0%";
				accomodation_page.style.left = "100%";
				contact_page.style.left = "100%";
				sponsors_page.style.left = "100%";
				entry_page.style.left = "100%";

				break;

			case "Accomodation":
				$('.title>h2').text('ACCOMODATION');
				accomodation_page.style.visibility = "visible";
				event_page.style.visibility = "hidden";
				event_category.style.visibility = "hidden";
				competitions.style.visibility = "hidden";
				contact_page.style.visibility = "hidden";
				sponsors_page.style.visibility = "hidden";
				entry_page.style.visibility = "hidden";

				competitions.style.left = "-100%";
				event_category.style.left = "-100%";
				event_page.style.left = "-100%";
				contact_page.style.left = "100%";
				sponsors_page.style.left = "100%";
				entry_page.style.left = "100%";
				if (document.documentElement.clientWidth>=800){
					accomodation_page.style.left= "10%";
				}
				else{
					accomodation_page.style.left = "0%";
				}

				break;

			case "Sponsors":
				$('.title>h2').text('SPONSORS');
				sponsors_page.style.visibility = "visible";
				contact_page.style.visibility = "hidden";
				accomodation_page.style.visibility = "hidden";
				event_page.style.visibility = "hidden";
				event_category.style.visibility = "hidden";
				competitions.style.visibility = "hidden";
				entry_page.style.visibility = "hidden";

				competitions.style.left = "-100%";
				event_category.style.left = "-100%";
				event_page.style.left = "-100%";
				accomodation_page.style.left= "-100%";
				contact_page.style.left = "100%";
				entry_page.style.left = "100%";
				if (document.documentElement.clientWidth>=800){
					sponsors_page.style.left= "10%";
				}
				else{
					sponsors_page.style.left = "0%";
				}

				break;

			case "Contact":
				$('.title>h2').text('CONTACT US');
				contact_page.style.visibility = "visible";
				accomodation_page.style.visibility = "hidden";
				event_page.style.visibility = "hidden";
				event_category.style.visibility = "hidden";
				competitions.style.visibility = "hidden";
				sponsors_page.style.visibility = "hidden";
				entry_page.style.visibility = "hidden";

				competitions.style.left = "-100%";
				event_category.style.left = "-100%";
				event_page.style.left = "-100%";
				accomodation_page.style.left= "-100%";
				sponsors_page.style.left = "-100%";
				entry_page.style.left = "100%";
				if (document.documentElement.clientWidth>=800){
					contact_page.style.left= "10%";
				}
				else{
					contact_page.style.left = "0%";
				}

				break;

			case "<nobr>Entry-Procedure</nobr>":
				$('.title>h2').text('ENTRY PROCEDURE');
				contact_page.style.visibility = "hidden";
				accomodation_page.style.visibility = "hidden";
				event_page.style.visibility = "hidden";
				event_category.style.visibility = "hidden";
				competitions.style.visibility = "hidden";
				sponsors_page.style.visibility = "hidden";
				entry_page.style.visibility = "visible";

				competitions.style.left = "-100%";
				event_category.style.left = "-100%";
				event_page.style.left = "-100%";
				accomodation_page.style.left= "-100%";
				sponsors_page.style.left = "-100%";
				contact_page.style.left = "-100%";
				if (document.documentElement.clientWidth>=800){
					entry_page.style.left= "10%";
				}
				else{
					entry_page.style.left = "0%";
				}
		}
	};
}
// nav.getElementsByTagName('li')[1].onclick = function(){
// 	alert("Hi");
// };
// alert("Hey");
