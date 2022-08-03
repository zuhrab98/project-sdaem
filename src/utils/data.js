export const datas =  {
	FILTER_CITIES:[
		{
			name: "Минск",
			filterProperty: "citi"
		},
		{
			name: "Екатеринбург",
			filterProperty: "citi"
		},
		{
			name: "Москва",
			filterProperty: "citi"
		}
	],
	SLEEPING_PLACES:[
		{
			name: "1 (1)",
			filterProperty: "places"
		},
		{
			name: "2 (1+1)",
			filterProperty: "places"
		},
		{
			name: "3 (2+1)",
			filterProperty: "places"
		},
		{
			name: "4 (2+2)",
			filterProperty: "places"
		}
	],
	FILTER_ROOMS:[
		{
			name: "1",
			filterProperty: "room"
		},
		{
			name: "2",
			filterProperty: "room"
		},
		{
			name: "3",
			filterProperty: "room"
		},
		{
			name: "4",
			filterProperty: "room"
		}
	],
	METRO_STATIONS:[
		{
			name: "Грушевка",
			filterProperty: "metro"
		},
		{
			name: "ВДНХ",
			filterProperty: "metro"
		},
		{
			name: "Чкаловская",
			filterProperty: "metro"
		}
	],
	REGIONS:[
		{
			name: "Шабаны",
			filterProperty: "region"
		},
		{
			name: "Уралмаш",
			filterProperty: "region"
		},
		{
			name: "Аэропорт",
			filterProperty: "region"
		}
	],
	NAVS:[
		{
			name: "Главная",
			path: "/"
		},
		{
			name: "Новости",
			path: "/news"
		},
		{
			name: "Размещение и тарифы",
			path: "/tariffs"
		},
		{
			name: "Объявления на карте",
			path: "/maps"
		},
		{
			name: "Контакты",
			path: "/contacts"
		}
	],
	NAVS_FOOTER:[
		{
			name: "Новости",
			path: "/news"
		},
		{
			name: "Размещение и тарифы",
			path: "/tariffs"
		},
		{
			name: "Объявления на карте",
			path: "/maps"
		},
		{
			name: "Контакты",
			path: "/contacts"
		}
	],
	APARTAMENTS:[
		{
			name: "Квартиры в Минске",
			citi: "Минск"
		},
		{
			name: "Квартиры в Екатерин-е",
			citi: "Екатеринбург"
		},
		{
			name: "Квартиры в Москве",
			citi: "Москва"
		}
	],
	LIST_PRODUCTS:[
		{
			name: "Коттеджи и усадьбы",
			paramName: "cottages"
		},
		{
			name: "Бани и сауны",
			paramName: "baths"
		},
		{
			name: "Авто на прокат",
			paramName: "cars"
		}
	],
	NAVS_BY_PARAMS:[
		{
			name: "Квартиры на сутки",
			paramName: "rooms"
		},
		{
			name: "Коттеджи и усадьбы",
			paramName: "cottages"
		},
		{
			name: "Бани и сауны",
			paramName: "baths"
		},
		{
			name: "Авто на прокат",
			paramName: "cars"
		}
	],
	PAYMENT:[
		{
			src: "/payments/visa.png",
			alt: "visa"
		},
		{
			src: "/payments/webpay.png",
			alt: "webpay"
		},
		{
			src: "/payments/verified-by-visa.png",
			alt: "verifiedby-visa"
		},
		{
			src: "/payments/securecode.png",
			alt: "securecode"
		},
		{
			src: "/payments/belkart.png",
			alt: "belkart"
		}
	],
	GALLERY_ADS:[
		{
			img: "img/promo1.jpg",
			title: "Квартиры на сутки",
			subtitle: "СНЯТЬ КВАРТИРУ",
			cities:[
				{
					citi: "Минск"
				},
				{
					citi: "Москва"
				},
				{
					citi: "Екатеринбург"
				}
			]
		},
		{
			img: "img/promo2.jpg",
			title: "Коттеджи и усадьбы",
			subtitle: "СНЯТЬ коттедж НА ПРАЗДНИК",
			paramName: "cottages"
		},
		{
			img: "img/promo3.jpg",
			title: "Бани и сауны",
			subtitle: "ПОПАРИТЬСЯ В БанЕ С ДРУЗЬЯМИ",
			paramName: "baths"
		},
		{
			img: "img/promo4.jpg",
			title: "Авто на прокат",
			subtitle: "ЕСЛИ СРОЧНО НУЖНА МАШИНА",
			paramName: "cars"
		}
	],
	PROMO_MENU :{
		ROOMS_TITLE: "Квартиры",
		ROOMS:[
			{
				name: "Квартиры в Минске",
				citi: "Минск",
				count: "3567"
			},
			{
				name: "Квартиры в Екатерин-е",
				citi: "Екатеринбург",
				count: "2302 "
			},
			{
				name: "Квартиры в Москве",
				citi: "Москва",
				count: "110"
			}
		],
		COTTAGES_TITLE: "Коттеджи и усадьбы",
		COTTAGES: [
			{
				name: "Аггроусадьбы",
				count: "110"
			},
			{
				name: "Коттеджи",
				count: "110"
			},
			{
				name: "Загородный комплекс",
				count: "110"
			},
			{
				name: "Базы отдыха",
				count: "110"
			},
			{
				name: "Аггроусадьбы",
				count: "110"
			},
			{
				name: "Аггроусадьбы",
				count: "110"
			},
			{
				name: "Аггроусадьбы",
				count: "110"
			},
			{
				name: "Аггроусадьбы",
				count: "110"
			}
		],
		POPULARS_TITLE: "Популярные направления",
		POPULARS: [
			{
				name: "Коттеджи и усадьбы в Минске",
				citi: "Минск",
				paramName: "cottages"
			},
			{
				name: "Коттеджи и усадьбы (жилье) в Москве",
				citi: "Москва",
				paramName: "cottages"
			},
			{
				name: "Коттеджи и усадьбы (жилье) в Екатеринбурге",
				citi: "Екатеринбург",
				paramName: "cottages"
			}
		]
	},
	APARTAMET_FOR_DAY :{
		img: "news-img.jpg",
		contentText: "<b>Нужна квартира на сутки в Минске?</b><br> На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает <b>более 500 квартир</b>. Благодаря удобной навигации вы быстро найдете подходящий вариант.",
		contentText2: "В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP с джакузи.",
		footerText: "Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки."
	},
	NEWS:[
		{
			id: "1",
			date: "14 Январь",
			title: "Линия Сталина: суровый отдых в усадьбах  на сутки"
		},
		{
			id: "2",
			date: "14 Январь",
			title: "Аренда квартиры посуточно"
		},
		{
			id: "3",
			date: "14 Январь",
			title: "Дворцово-парковый комплекс Чапских"
		},
		{
			id: "4",
			date: "14 Январь",
			title: "Дворцово-парковый комплекс Чапских"
		},
		{
			id: "5",
			date: "14 Январь",
			title: "Дворцово-парковый комплекс Чапских"
		}
	],
	SELECTEDS_HEADER :{
		rooms:[
			{
				name: "Квартиры на сутки в Минске",
				citi: "Минск",
				path: "/apartmentCatalog"
			},
			{
				name: "Квартиры на сутки в Екатеринбурге",
				citi: "Екатеринбург",
				path: "/apartmentCatalog"
			},
			{
				name: "Квартиры на сутки в Москве",
				citi: "Москва",
				path: "/apartmentCatalog"
			}
		],
		cottages:[
			{
				name: "Коттеджи и усадьбы на сутки в Минске",
				citi: "Минск",
				path: "/apartmentCatalog"
			},
			{
				name: "Коттеджи и усадьбы на сутки в Екатеринбурге",
				citi: "Екатеринбург",
				path: "/apartmentCatalog"
			},
			{
				name: "Коттеджи и усадьбы на сутки в Москве",
				citi: "Москва",
				path: "/apartmentCatalog"
			}
		],
		cars: [
			{
				name: "Авто на прокат в Минске",
				citi: "Минск"
			},
			{
				name: "Авто на прокат  в Екатеринбурге",
				citi: "Екатеринбург"
			},
			{
				name: "Авто на прокат  в Москве",
				citi: "Москва"
			}
		],
		baths:[
			{
				name: "Бани и сауны в Минске",
				citi: "Минсе"
			},
			{
				name: "Бани и сауны в Екатеринбурге",
				citi: "Екатеринбург"
			},
			{
				name: "Бани и сауны в Москве",
				citi: "Москва"
			}
		]
	},
	OPTIONS:[
		{
			id: 1,
			name: "option",
			label: "Газовая плита",
			checked: false
		},
		{
			id: 2,
			name: "option",
			label: "Духовка",
			checked: false
		},
		{
			id: 3,
			name: "option",
			label: "Кофеварка",
			checked: false
		},
		{
			id: 4,
			name: "option",
			label: "Микроволновая печь",
			checked: false
		},
		{
			id: 5,
			name: "option",
			label: "Посуда",
			checked: false
		},
		{
			id: 6,
			name: "option",
			label: "Посудомоечная машина",
			checked: false
		},
		{
			id: 7,
			name: "option",
			label: "Газовая плита",
			checked: false
		},
		{
			id: 8,
			name: "option",
			label: "Духовка",
			checked: false
		},
		{
			id: 9,
			name: "option",
			label: "Кофеварка",
			checked: false
		},
		{
			id: 10,
			name: "option",
			label: "Микроволновая печь",
			checked: false
		},
		{
			id: 11,
			name: "option",
			label: "Посуда",
			checked: false
		},
		{
			id: 12,
			name: "option",
			label: "Посудомоечная машина",
			checked: false
		},
		{
			id: 13,
			name: "option",
			label: "Газовая плита",
			checked: false
		},
		{
			id: 14,
			name: "option",
			label: "Духовка",
			checked: false
		},
		{
			id: 15,
			name: "option",
			label: "Кофеварка",
			checked: false
		},
		{
			id: 16,
			name: "option",
			label: "Микроволновая печь",
			checked: false
		},
		{
			id: 17,
			name: "option",
			label: "Посуда",
			checked: false
		},
		{
			id: 18,
			name: "option",
			label: "Посудомоечная машина",
			checked: false
		},
		{
			id: 19,
			name: "option",
			label: "Газовая плита",
			checked: false
		},
		{
			id: 20,
			name: "option",
			label: "Духовка",
			checked: false
		},
		{
			id: 21,
			name: "option",
			label: "Кофеварка",
			checked: false
		},
		{
			id: 22,
			name: "option",
			label: "Микроволновая печь",
			checked: false
		},
		{
			id: 23,
			name: "option",
			label: "Посуда",
			checked: false
		},
		{
			id: 24,
			name: "option",
			label: "Посудомоечная машина",
			checked: false
		}
	]
}