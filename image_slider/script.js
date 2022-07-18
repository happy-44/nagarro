let array=['./a1.jpg','./a5.jpg','./a6.jpg','./a10.jpg']
let curr=0;
loadimg=()=>{
	let tag=document.getElementById('pic')
	tag.setAttribute('src', array[curr])
}
$(document).ready(()=>{
	$('#left').click(()=>{
		curr-=1
		if (curr<0){
			curr=array.length-1
		}
		$('#pic').attr('src',array[curr])
		$('#index').val(curr*33)
	})
	$('#right').click(()=>{
		curr+=1
		if (curr>array.length-1){
			curr=0
		}
		$('#pic').attr('src',array[curr])
		$('#index').val(curr*33)

	})
	$('#index').change(()=>{
		let inx=$('#index').val()
		curr=parseInt(inx/33)
		$('#pic').attr('src',array[curr])

	})
})