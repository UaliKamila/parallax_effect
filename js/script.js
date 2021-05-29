$(document).ready(function () {
	$('.parallax__list>li').addClass('layer'); /*к li добавили класс */
	$('.parallax__list').parallax(); /*подключаем parallax js файл, при движении мышбю картинки движется*/
	$('.wrapper').addClass('active'); /*когда стр подгрузится добавится класс актив */
});