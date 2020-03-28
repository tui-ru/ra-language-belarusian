module.exports = {
	ra: {
		action: {
			export: 'Экспарт',
			add_filter: 'Дадаць фільтр',
			add: 'Жадаць',
			back: 'Назад',
			bulk_actions: '1 абраны |||| %{smart_count} абрана |||| %{smart_count} абрана',
			cancel: 'Адмена',
			clear_input_value: 'Ачысціць',
			clone: 'Дубляваць',
			confirm: 'Пацвердзіць',
			create: 'Стварыць',
			delete: 'Выдаліць',
			edit: 'Рэдагаваць',
			list: 'Спіс',
			refresh: 'Абнавіць',
			remove_filter: 'Прыбраць фільтр',
			remove: 'Выдаліць',
			save: 'Захаваць',
			search: 'Пошук',
			show: 'Прагляд',
			sort: 'Сартаванне',
			undo: 'Адмяніць',
			expand: 'Раскрыць',
			close: 'Зачыніць',
		},
		boolean: {
			true: 'Ды',
			false: 'Няма',
			null: '',
		},
		page: {
			dashboard: 'Галоўная',
			error: 'Нешта пайшло не так',
			list: '%{name}',
			loading: 'Загрузка',
			not_found: 'Не знойдзена',
			show: '%{name} #%{id}',
			edit: '%{name} #%{id}',
			create: 'Стварыць %{name}',
			empty: 'Няма %{name}.',
			invite: 'Вы хочаце дадаць яшчэ адну?',
		},
		input: {
			file: {
				upload_several: 'Перацягнуць файлы сюды або націсніце для выбару.',
				upload_single: 'Перацягнуць файл сюды або націсніце для выбару.',
			},
			image: {
				upload_several:
					'Перацягнуць выявы сюды або націсніце для выбару.',
				upload_single:
					'Перацягнуць малюнак сюды або націсніце для выбару.',
			},
			references: {
				all_missing: 'Звязаных дадзеных не знойдзена',
				many_missing:
					'Некаторыя з звязаных дадзеных не даступныя',
				single_missing:
					'Звязаны аб\'ект не даступны',
			},
			password: {
				toggle_visible: 'Схаваць пароль',
				toggle_hidden: 'Паказаць пароль',
			},
		},
		message: {
			about: 'Даведка',
			are_you_sure: 'Вы ўпэўнены?',
			bulk_delete_content:
				'Вы ўпэўненыя, што жадаеце выдаліць %{name}? |||| Вы ўпэўненыя, што жадаеце выдаліць аб\'екты, кол-вом %{smart_count}? |||| Вы ўпэўненыя, што жадаеце выдаліць аб\'екты, кол-вом %{smart_count}?',
			bulk_delete_title: 'Выдаліць %{name} |||| Выдаліць %{smart_count} %{name} |||| Выдаліць %{smart_count} %{name}',
			delete_content: 'Вы ўпэўнены, што хочаце выдаліць гэты элемент?',
			delete_title: 'Выдаліць %{name} #%{id}',
			details: 'Апісанне',
			error: 'У працэсе запыту паўстала памылка, і ён не можа быць завершаны',
			invalid_form: 'Форма запоўненая няправільна, праверце, калі ласка, памылкі',
			loading: 'Ідзе загрузка, калі ласка, пачакайце ...',
			no: 'Няма',
			not_found: 'Памылка URL або вы вынікаеце па няслушнай спасылцы',
			yes: 'Ды',
		},
		navigation: {
			no_results: 'Вынікаў не знойдзена',
			no_more_results: 'Старонка %{page} выходзіць за межы нумарацыі, паспрабуйце папярэднюю',
			page_out_of_boundaries: 'Старонка %{page} па-за межамі',
			page_out_from_end: 'Немагчыма перамясціцца далей апошняй старонкі',
			page_out_from_begin: 'Нумар старонкі не можа быць менш 1',
			page_range_info: '%{offsetBegin}-%{offsetEnd} з %{total}',
			page_rows_per_page: 'Радкоў на старонцы:',
			next: 'Наступная',
			prev: 'Папярэдні',
		},
		auth: {
			auth_check_error: 'Калі ласка, аўтарызуйцеся для працягу працы',
			user_menu: 'Профіль',
			username: 'Імя карыстальніка',
			password: 'Пароль',
			sign_in: 'Увайсці',
			sign_in_error: 'Памылка аўтэнтыфікацыі, паспрабуйце зноў',
			logout: 'Выйсці',
		},
		notification: {
			updated: 'Элемент абноўлены |||| %{smart_count} абноўлена |||| %{smart_count} абноўлена',
			created: 'Элемент створаны',
			deleted: 'Элемент выдалены |||| %{smart_count} выдалена |||| %{smart_count} выдалена',
			bad_item: 'Элемент не Валід',
			item_doesnt_exist: 'Элемент не існуе',
			http_error: 'Памылка сервера',
			data_provider_error: 'Памылка dataProvider, праверце кансоль',
			i18n_error: 'Не атрымалася загрузіць пераклад для абранай мовы',
			canceled: 'Аперацыя адменена',
			logged_out: 'Ваша сесія завершана, паспрабуйце перападключаны / увайсці зноў',
		},
		validation: {
			required: 'Абавязкова для запаўнення',
			minLength: 'Мінімальны кол-у знакаў% {min}',
			maxLength: 'Максімальную колькасць знакаў% {max}',
			minValue: 'Мінімальнае значэнне% {min}',
			maxValue: 'Значэнне можа быць% {max} або менш',
			number: 'Павінна быць лічбай',
			email: 'Некарэктны email',
			oneOf: 'Павінна быць адным з:% {options}',
			regex: 'Павінна быць у фармаце (regexp):% {pattern}',
		},
	},
};
