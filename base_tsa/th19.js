{
	"title": "東方獣王園　〜 Unfinished Dream of All Living Ghost",
	"latest": [
		"v0.01a"
	],
	"steam_appid": "2400340",
	"breakpoints": {
		"file_size": {
			"file_size": "eax",
			"file_name": "ebx",
			"cavesize": 5
		},
		"file_load": {
			"file_buffer": "edi",
			"stack_clear_size": 8,
			"cavesize": 5
		},
		"file_loaded": {
			"cavesize": 5
		},
		"music_title": {
			"track": "[ebp-0x24]",
			"str": "eax",
			"format_id": "Music Room Numbered Title",
			"cavesize": 5,
		},
		"music_cmt": {
			"str": "edx",
			"line_num": "[eax+0xA40]",
			"track": "[eax+0xA44]",
			"format_id": "Music Room Note Title",
			"cavesize": 5
		},
		"ruby_offset": {
			"str": "esi",
			"offset": "eax",
			"cavesize": 6
		},
		"gentext#ability_select": {
			"file": "abilities.js",
			"ids": [ "ecx", 0 ],
			"line": 0,
			"str": "eax",
			"cavesize": 14,
			"cave_exec": false
		},
	},
	"binhacks": {
		"sprintf_th19_l": {
			"code": "ff752450f30f11442420e8[strings_vsprintf]89442434"
		},
		"sprintf_th19_rc": {
			"code": "ff752050f30f11442420e8[strings_vsprintf]89442434"
		},
		"textbox_size_1": {
			"code": "6a0051e8[GetTextExtentForFontID]83e81c730231c08b9fb4010000<nop:7>"
		},
		"textbox_size_2": {
			"code": "6a0051e8[GetTextExtentForFontID]83e81c730231c0<nop:7>"
		},
	}
}