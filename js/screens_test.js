 function Screens() {

	this.getTestSCR = function (scrData) {


		function btn1()
		{
			alert(1);
		}
		function btn2(){
			alert(2);
		}
		function btn3(){
			alert(3);
		}
		function btn4(){
			alert(4);
		}
		function btnCancel(){
			alert('Cancel');
		}
		function btnExit(){
			alert('Exit');
		}
			scrData.title = 'Выберите операцию';
		scrData.Btn1 = {};
		scrData.Btn1.icon = 'img/icons/48 Icon-Urozhai.png';
		scrData.Btn1.text = 'SMS-сервис';
		scrData.Btn1.onclick = btn1;
		scrData.Btn1.hwLink = 49;


		scrData.Btn2 = {};
		scrData.Btn2.icon = 'img/icons/48 Icon-Internet.png';
		scrData.Btn2.text = 'Бесплатные уведомления';
		scrData.Btn2.onclick = btn2;
		scrData.Btn2.hwLink = 50;



		scrData.Btn3 = {};
		scrData.Btn3.icon = 'img/icons/48 Icon-3ds.png';
		scrData.Btn3.text = 'SMS о пополнении';
		scrData.Btn3.onclick = btn3;
		scrData.Btn3.hwLink = 51;

		scrData.Btn4 = {};
		scrData.Btn4.icon = 'img/icons/48 Icon-Internet.png';
		scrData.Btn4.text = 'Отключение SMS';

		scrData.Btn4.onclick = btn4;
		scrData.Btn4.hwLink = 52;


		scrData.cancelBtn = {};
		scrData.cancelBtn.text = 'выйти';
		scrData.cancelBtn.icon = 'img/icons/40 Icon-Cancel.png';
		scrData.cancelBtn.onclick = btnCancel;

		scrData.exitBtn = {};
		scrData.exitBtn.text = 'вернуть карту';
		scrData.exitBtn.icon = 'img/icons/48 Icon-card.png';
		scrData.exitBtn.onclick = btnExit;
		scrData.exitBtn.hwLink= 27;
		return scrData;
	};

	this.getCardsMen = function(cardData) {
		cardData.Card1 = {};
		cardData.Card1.logo = 'images/icons/48 Icon-MC.png';
		cardData.Card1.name = 'mastercard';
		cardData.Card1.number = '*5674';

		cardData.Card2 = {};
		cardData.Card2.logo = 'images/icons/48 Icon-VISA.png';
		cardData.Card2.name = 'visa';
		cardData.Card2.number = '*5674';

		cardData.Card3 = {};
		cardData.Card3.logo = 'images/icons/48 Icon-MIR.png';
		cardData.Card3.name = 'мир';
		cardData.Card3.number = '*6722';

		cardData.Card4 = {};
		cardData.Card4.logo = 'images/icons/48 Icon-VISA.png';
		cardData.Card4.name = 'visa';
		cardData.Card4.number = '*3312';

		cardData.Card5 = {};
		cardData.Card5.logo = 'images/icons/48 Icon-MC.png';
		cardData.Card5.name = 'mastercard';
		cardData.Card5.number = '*8922';

		return cardData;
	}
}
