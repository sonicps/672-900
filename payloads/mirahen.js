function mirahen(){
	window.mira_blob_2_len = 0x542f8;
	window.mira_blob_2 = malloc(window.mira_blob_2_len);
	write_mem(window.mira_blob_2, payload);
}