{
	"binhacks": {
		"sprintf_call_esp+14": {
			"addr": "0x454c8d"
		},
		"sprintf_call_esp+1c": {
			"addr": [
				"0x454d39",
				"0x454e19"
			]
		},
		"sprintf_rep": {
			"addr": [
				"0x454cd3",
				"0x454db6",
				"0x454e8a"
			]
		},
		"spell_align": {
			"addr": "0x454d67"
		},
		"result_spell_align": {
			"addr": "0x454e79"
		},
		"unpatch_font_assist": {
			"addr": "0x4445c5"
		},
		"directinput_fix_1": {
			"addr": "Rx46add"
		},
		"directinput_fix_2": {
			"addr": "Rx46d20"
		},
		"directinput_fix_3": {
			"addr": "Rx456c3",
			"code": "e8 15140000"
		},
		"directinput_fix_4": {
			"addr": "Rx45737",
			"code": "a1 883d4c00 85c0 0f84"
		},
		"fix_alice_practice_end_crash": {
			"addr": "Rx35233",
			"code": "85c0 7412 51 d980c4030000 d91c24 e88a3c0200 d95e30 33c0 5e c20400",
			"expected": "51 d980c4030000 d91c24 e88e3c0200 d95e30 33c0 5e c20400 cccccccc"
		}
	},
	"breakpoints": {
		"devicelost": {
			"pres_params": "RxC3374",
			"addr": "Rx465FE"
		},
		"file_size": {
			"addr": "0x45848e"
		},
		"file_load": {
			"addr": "0x4584ca"
		},
		"file_loaded": {
			"addr": "0x441883"
		},
		"spell_id": {
			"addr": "0x415b99"
		},
		"spell_id#real": {
			"addr": "0x415bea"
		},
		"spell_name": {
			"addr": "0x40c853"
		},
		"spell_id#result": {
			"addr": "0x43f203"
		},
		"spell_name#result": {
			"addr": "0x43f2de"
		},
		"music_title": {
			"addr": "0x440b93"
		},
		"music_cmt#track": {
			"addr": [
				"0x440d47",
				"0x440e18"
			]
		},
		"music_cmt": {
			"addr": [
				"0x440d58",
				"0x440e29"
			]
		},
		"ruby_offset": {
			"addr": [
				"Rx1d680",
				"Rx1d719"
			]
		}
	},
	"tsa_font_block": [
		"Rxc2eec",
		"Rxc2ee8",
		"Rxc0ee4"
	]
}
